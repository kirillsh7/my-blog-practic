import styled from 'styled-components'
import { Header, Footer } from './components/index'
import { Route, Routes } from 'react-router-dom'
import { Autorization, Post, Registration, Users } from './pages'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './actions'

const AppColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 1000px;
min-height: 100%;
background-color: #fff;
margin: 0 auto;
`
const Page = styled.div`
padding: 120px 0 0 20px;
`


function Blog() {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData')
    if (!currentUserDataJSON) return

    const currentUserData = JSON.parse(currentUserDataJSON)
    dispatch(setUser(
      {
        ...currentUserData,
        roleId: Number(currentUserData.roleId)
      }))
  }, [dispatch])
  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<h1>Главная</h1>} />
          <Route path="/login" element={<Autorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<h1>Новая статья</h1>} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  )
}

export default Blog
