import styled from 'styled-components';
import background from '../../Assets/Images/orangeBackground.png';
import { ReactComponent as heroImage } from '../../Assets/Images/Logo.svg';
import Cep from 'react-simple-cep-mask';

export const Container = styled.main`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-height: 100vh;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 600px;
  width: 90vw;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    height: auto;
    width: auto;
  }
`;

export const HeroContainer = styled.div`
  height: 100%;
  width: 47%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;

  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
    margin-bottom: 30px;
    padding-right: 0;
  }
`;

export const HeroImage = styled(heroImage)`
  width: 25rem;
  height: auto;

  margin-top: -100px;
  margin-bottom: 15px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 3.6rem;
  font-weight: 500;
  max-width: 500px;

  margin-bottom: 15px;

  color: #232429;

  @media (max-width: 950px) {
    font-size: 3.2rem;
    text-align: center;
  }
`;

export const HeroDescription = styled.p`
  font-family: 'Roboto';
  font-size: 1.9rem;
  font-weight: 400;
  color: #232429;

  @media (max-width: 950px) {
    width: 80%;
    text-align: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 47%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  padding-left: 150px;

  @media (max-width: 950px) {
    width: 80%;
    align-items: center;
    padding: 0;
  }
`;

export const FormTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 500;
  color: #232429;
  margin-bottom: 15px;
`;

export const FormSubTitle = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 500;
  color: #232429;
  margin: 10px 0;
`;

export const FormInput = styled(Cep)`
  outline: none;
  border: ${(props) => (props.error ? 'solid 2px red' : 'none')};
  border-radius: 12px;
  height: 3.2rem;
  width: 22rem;

  padding: 0 20px;
  font-family: 'Roboto';
  font-size: 1.2rem;
`;

export const FormButton = styled.button`
  cursor: pointer;
  height: 3.2rem;
  width: 10rem;
  outline: none;
  border: solid 1px #fff;
  color: #fff;
  border-radius: 12px;
  background: transparent;
  font-family: 'Roboto';
  font-size: 1.2rem;
  font-weight: 500;

  align-self: end;
  transition: all 0.1s ease-in-out;

  &:hover {
    border: solid 1px #fe641c;
    background: #eb4604;
  }

  @media (max-width: 950px) {
    align-self: center;
  }
`;

export const Error = styled.span`
  font-family: 'Roboto';
  color: red;
`;
