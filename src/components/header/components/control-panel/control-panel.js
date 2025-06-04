import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Icon } from '../../../../components'
const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`
const StyledLink = styled(Link)`
  font-size: 18px;
  width: 100px;
  height: 32px;
  border: 1px solid #000;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`
const StyledIcon = styled.div`
&:hover {
	cursor: pointer;
}
`
const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate()
  return (
    <div className={className}>
      <RightAligned>
        <Button>
          <Link to="/login">Войти</Link>
        </Button>
      </RightAligned>
      <RightAligned>
        <StyledIcon onClick={() => navigate(-1)}>
          <Icon size="24px" id="fa-backward" margin="10px 0 0 0" />
        </StyledIcon>
        <Link to="/post">
          <Icon size="20px" id="fa-file-text-o" margin="10px 0 0 16px" />
        </Link>
        <Link to="/users">
          <Icon size="20px" id="fa-users" margin="10px 0 0 16px" />
        </Link>
      </RightAligned>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)``
