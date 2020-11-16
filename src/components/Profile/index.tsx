import React from 'react';

import image from '../../../assets/avatar.png';

import Title from '../Title';

import { Avatar } from './styles';

const Profile: React.FC = () => {
  return (
    <>
      <Avatar source={image} />
      <Title>Jane Doe</Title>
    </>
  );
};

export default Profile;
