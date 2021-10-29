import styled from 'styled-components';
import { ReactComponent as logoFooter } from '../../Assets/Images/LogoFooter.svg';

export const Container = styled.footer`
  background: #212121;
  height: 20vh;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 19vh;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const FooterList = styled.div`
  width: 200px;
  height: 19vh;
`;

export const LogoFooter = styled(logoFooter)`
  width: 6rem;
  height: auto;
  margin-top: 15px;
`;

export const FooterDescription = styled.p`
  font-family: 'Roboto';
  font-size: 0.7rem;
  color: #8f9195;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FooterTitulo = styled.h1`
  font-family: 'Roboto';
  font-size: 1.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
`;

export const FooterP = styled.p`
  font-family: 'Roboto';
  font-size: 0.9rem;
  color: #8f9195;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  margin-top: 8px;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #eb4604;
    cursor: pointer;
  }
`;

export const FooterListLarge = styled.div`
  width: 400px;
  height: 19vh;
`;

export const SocialLogo = styled.img`
  height: 2rem;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
`;
