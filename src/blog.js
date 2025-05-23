import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import { Route, Routes } from 'react-router-dom'
const Content = styled.div`
padding: 120px 0;
`
const H2 = styled.h2`
text-align: center
`
function Blog() {
  return (
    <>
      <Header />
      <Content>
        <H2>Контент страницы</H2>
        <Routes>
          <Route path="/" element={<h1>Главная</h1>} />
          <Route path="/login" element={<h1>Авторизация</h1>} />
          <Route path="/register" element={<h1>Регистрация</h1>} />
          <Route path="/users" element={<h1>Пользователи</h1>} />
          <Route path="/post" element={<h1>Новая статья</h1>} />
          <Route path="/post/:postId" element={<h1>Статья</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default Blog
