import { useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { server } from '../../bff'
import styled from 'styled-components'
import { Input, Button } from '../../components'
import { Link } from 'react-router-dom'
const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required("Заполните логин")
		.matches(/^\w+$/, 'Неверно заполнен логин. Должен содержать только буквы, цифры')
		.min(3, "Неверный логин должен быть больше 3 символов")
		.max(15, "Неверный логин должен содержать максимум 15 символов"),
	password: yup
		.string()
		.required("Заполните пароль")
		.matches(/^[\w#%]+$/, 'Неверно заполнен пароль. Должен содержать только буквы, цифры и знаки # % 	')
		.min(6, "Неверный пароль должен быть больше 6 символов")
		.max(30, "Неверный пароль должен содержать максимум 30 символов"),
})

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration:underline;
	margin: 20px 0;
	font-size:18px;
`
const ErrorMessage = styled.div`
	font-size:12px;
	padding: 10px;
	width: 100%;
	background-color : #fcadad;

`
const AutorizationContainer = ({ className }) => {
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema)
	})
	const [serverError, setServerError] = useState()
	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError("Ошибка запроса:"`${error}`)
			}
		})
	}
	const formError = errors.login?.message || errors?.password?.message
	const errorMessage = formError || serverError
	return (
		<div className={className}>
			<h2>
				Авторизация
			</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" placeholder="Логин..." {...register('login')} />
				<Input type="password" placeholder="Пароль..." {...register('password')} />
				<Button type='submit' disabled={!!formError}>Авторизоваться</Button>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</div>
	)
}

export const Autorization = styled(AutorizationContainer)`
display: flex;
flex-direction: column;
align-items: center;
& > form {
	width:260px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}
`
