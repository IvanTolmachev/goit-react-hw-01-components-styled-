import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Stats,
  ItemStats,
  Label,
  Quantity,
  UserName,
  TagLocation,
  Avatar,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <TagLocation>@{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </Description>
      <Stats>
        <ItemStats>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ItemStats>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
