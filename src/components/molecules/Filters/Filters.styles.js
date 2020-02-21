import styled from "styled-components";

export const Filters = styled.div`
  display: flex;

  width: 100%;

  height: 100%;
  padding: 20px;

  flex-direction: column;
  background-color: #f4f7f9;
  h2 {
    font-weight: normal;
    letter-spacing: 0.05em;
  }
`;

export const FiltersSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;
