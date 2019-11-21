import React from 'react';
import { User } from '../actions';
import { UserCard } from './UserCard';

import '../styles/components/UserList.css';

interface Props {
  userData: User[];
}

export const UserList = ({ userData }: Props): JSX.Element => {
  return (
    <div className="user-list">
      {Array.isArray(userData) &&
        userData.map(user => <UserCard key={user.id} {...user} />)}
    </div>
  );
};
