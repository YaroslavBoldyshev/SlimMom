import { logOut } from 'redux/auth/auth-operations';
import { UserContainer, UserLogOut, UserName } from './UserInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/user/user-selectors';
import { getUserInfo } from 'redux/user/user-operations';
import { useEffect } from 'react';

export const UserInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const user = useSelector(selectUserName);
  return (
    <UserContainer>
      <UserName>{user}</UserName>
      <UserLogOut onClick={() => dispatch(logOut())}>LogOut</UserLogOut>
    </UserContainer>
  );
};
