import PropTypes from 'prop-types';
import { Item, StatsLabel, FriendName, Avatar } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <StatsLabel stats={isOnline}></StatsLabel>
      <Avatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
