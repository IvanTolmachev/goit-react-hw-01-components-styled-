import styled from '@emotion/styled';

export const Section = styled.section`
  width: 300px;
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 8px 20px rgba(28, 28, 30, 0.5),
    0px 4px 10px rgba(255, 255, 255, 0.1);
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: rgb(93, 93, 93);
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 5px 5px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5);
  height: 100%;
  ${props => {
    switch (props.label) {
      case '.docx':
        return 'background-color: rgb(79, 196, 249)';
      case '.pdf':
        return 'background-color: rgb(162, 61, 243)';
      case '.mp3':
        return 'background-color: rgb(230, 76, 104)';
      case '.psd':
        return 'background-color: rgb(33, 184, 195)';
      default:
        return;
    }
  }}
`;

export const Label = styled.span`
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
`;
