import { Logo } from './components/index'
import styled from 'styled-components'
function HeaderContainer({ className }) {
	return (
		<header className={className}>
			<Logo />
		</header>
	)
}

export const Header = styled(HeaderContainer)`
  position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #fff;
	box-shadow: 0px -2px 17px #000;
`
