import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { server } from '../../bff'
import styled from 'styled-components'
import { Input, Button, H2, AuthFormError } from '../../components'
import { useResetForm } from '../../hooks'
import { Link, Navigate } from 'react-router-dom'
import { setUser } from '../../actions'
import { selectUserRole } from '../../selectors'
import { ROLE } from '../../constants'
const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Должен содержать только буквы, цифры')
		.min(3, 'Неверный логин должен быть больше 3 символов')
		.max(15, 'Неверный логин должен содержать максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Должен содержать только буквы, цифры и знаки # % 	',
		)
		.min(6, 'Неверный пароль должен быть больше 6 символов')
		.max(30, 'Неверный пароль должен содержать максимум 30 символов'),
})

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  margin: 20px 0;
  font-size: 18px;
`
const AutorizationContainer = ({ className }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	})
	const [serverError, setServerError] = useState()
	const dispatch = useDispatch()
	const roleId = useSelector(selectUserRole)
	useResetForm(reset)
	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса:${error}`)
				return
			}
			dispatch(setUser(res))
			sessionStorage.setItem('userData', JSON.stringify(res))
		})
	}
	const formError = errors.login?.message || errors?.password?.message
	const errorMessage = formError || serverError
	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />
	}
	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password', { onChange: () => setServerError(null) })}
				/>
				<Button type="submit" disabled={!!formError}>
					Авторизоваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</div>
	)
}

export const Autorization = styled(AutorizationContainer)`
  display: flex;
	flex-grow: 1;
  flex-direction: column;
  align-items: center;
  & > form {
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`
