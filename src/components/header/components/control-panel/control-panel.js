import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button, Icon } from '../../../../components'
import { ROLE } from '../../../../constants'
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors'
import { logout } from '../../../../actions'
import { checkAccess } from '../../../../utils'

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;`


const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const roleId = useSelector(selectUserRole)
  const login = useSelector(selectUserLogin)
  const session = useSelector(selectUserSession)
  const onLogout = () => {
    dispatch(logout(session))
    sessionStorage.removeItem('userData')
  }

  const isAdmin = checkAccess([ROLE.ADMIN], roleId)

  return (
    <div className={className}>
      <RightAligned> {roleId === ROLE.GUEST ?
        <Button>
          <Link to="/login">Войти</Link>
        </Button>
        : <>
          <UserName>{login}</UserName>
          <Icon id="fa-sign-out" margin="0 0 0 10px" onClick={onLogout} isButton />
        </>}

      </RightAligned>
      <RightAligned>
        <Icon size="24px" id="fa-backward" margin="10px 0 0 0" isButton onClick={() => navigate(-1)} />
        {isAdmin && <>
          <Link to="/post">
            <Icon size="20px" id="fa-file-text-o" margin="10px 0 0 16px" isButton />
          </Link>
          <Link to="/users">
            <Icon size="20px" id="fa-users" margin="10px 0 0 16px" isButton />
          </Link>
        </>
        }
      </RightAligned>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)``
