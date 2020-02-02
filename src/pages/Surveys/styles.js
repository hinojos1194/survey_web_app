import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroundColor};
  max-width: 1200px;
  margin: 0 auto;
`;

export const SurveyGrid = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  /* text-transform: uppercase; */
`;
