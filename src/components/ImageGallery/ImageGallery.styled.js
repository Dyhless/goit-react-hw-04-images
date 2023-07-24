import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 12px;
  margin-top: 100px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;