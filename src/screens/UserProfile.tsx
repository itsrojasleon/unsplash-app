import React from 'react';
import { useParams } from 'react-router-dom';

export default (props: any) => {
  const { username } = useParams();
  return <div>{username}</div>;
};
