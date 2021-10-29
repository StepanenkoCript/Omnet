import { Link as Linkk } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  height: 4rem;
  display: flex;

  justify-content: center;
  align-items: center;
  box-shadow: 7px 5px 17px -4px rgba(0, 0, 0, 0.86);
  position: absolute;
  width: 100%;
`;

export const Content = styled.div`
  height: 3.8rem;
  width: 90vw;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinks = styled.div`
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
`;

export const Link = styled(Linkk)`
  font-family: 'Roboto', sans-serif, 'Segoe UI', Tahoma, Geneva, Verdana,
    sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: #232429;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #eb4604;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  height: 2rem;
`;
