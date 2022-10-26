import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  align-items: center;
  gap: 20px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 18px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    align-items: center;
    gap: 20px;
  }
`;

export const ListItem = styled.li`
  max-width: 150px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 120px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 100px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 4px;
  }
`;
