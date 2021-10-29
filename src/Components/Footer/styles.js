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
  justify-content: space-between;
  outline: 1px solid red;
`;

export const OmnetDescription = styled.div`
  width: 200px;
  height: 19vh;
  outline: 2px solid green;
`;

export const LogoFooter = styled(logoFooter)`
  width: 6rem;
  height: auto;
  margin-top: 15px;
`;

export const FooterDescription = styled.p`
  font-family: 'Roboto';
  font-size: 0.9rem;
  color: #8f9195;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
