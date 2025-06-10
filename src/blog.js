import styled from 'styled-components'
import { Header, Footer } from './components/index'
import { Route, Routes } from 'react-router-dom'
import { Autorization, Registration, Users } from './pages'

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
padding: 120px 0;
`


function Blog() {
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
          <Route path="/post/:postId" element={<h1>Статья</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  )
}

export default Blog
