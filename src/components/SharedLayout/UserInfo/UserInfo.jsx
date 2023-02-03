import { logOut } from 'redux/auth/auth-operations';
import {
  GoBackContainer,
  UserContainer,
  UserInfoContainer,
  UserLogOut,
  UserName,
} from './UserInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/user/user-selectors';
import { getUserInfo } from 'redux/user/user-operations';
import { useEffect } from 'react';
import GoBack from 'components/GoBack/GoBack';

export const UserInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const user = useSelector(selectUserName);
  return (
    <UserInfoContainer>
      <GoBackContainer>
        <GoBack />
      </GoBackContainer>
      <UserContainer>
        <UserName>{user}</UserName>
        <UserLogOut onClick={() => dispatch(logOut())}>Exit</UserLogOut>
      </UserContainer>
    </UserInfoContainer>
  );
};
