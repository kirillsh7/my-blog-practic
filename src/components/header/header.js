import { ControlPanel, Logo } from './components/index';
import styled from 'styled-components';
const Discription = styled.div`
  font-style: italic;
`;

function HeaderContainer({ className }) {
  return (
    <header className={className}>
      <Logo />
      <Discription>
        Веб-разработчик
        <br />
        Напиание кода
        <br />
        Разбор ошибок
      </Discription>
      <ControlPanel />
    </header>
  );
}

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px -2px 17px #000;
`;
