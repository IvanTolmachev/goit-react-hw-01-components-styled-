import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 8px 20px rgba(28, 28, 30, 0.5),
    0px 4px 10px rgba(255, 255, 255, 0.1);
`;

export const StatsLabel = styled.span`
  display: block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 15px;

  ${props => {
    if (props.stats) {
      return 'background-color: green';
    } else return 'background-color: red';
  }};
`;

export const Avatar = styled.img`
  margin-right: 15px;
  border-radius: 5px;
  background-color: rgb(229, 229, 229);
`;

export const FriendName = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
