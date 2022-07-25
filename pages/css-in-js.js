import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

function cssJS() {
  return <Title>Styled Component</Title>;
  //return <h2 style={{ color: 'red' }}>Hello World</h2>; //not recommended
}
export default cssJS;
