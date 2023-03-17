import PropTypes from 'prop-types';
import {
  List,
  Item,
  StatsLabel,
  FriendName,
  Avatar,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Item key={id}>
          <StatsLabel stats={isOnline}></StatsLabel>
          <Avatar src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      username: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};
