import { logOut } from 'redux/auth/auth-operations';
import { UserContainer, UserLogOut, UserName } from './UserInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUsername);
  return (
    <UserContainer>
      <UserName>{userName}</UserName>
      <UserLogOut onClick={() => dispatch(logOut)}>LogOut</UserLogOut>
    </UserContainer>
  );
};
