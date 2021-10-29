import styled from 'styled-components';

export const Container = styled.main`
  background-color: #e5e5e5;
  padding-top: 5rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const DivTitulos = styled.div`
  height: 20vh;
  width: 80vw;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const NossosPlanos = styled.h4`
  font-family: 'Roboto';
  color: #ff641c;

  font-weight: 400;
  text-align: center;
`;

export const PlanosContainer = styled.main`
  height: 100%;
  width: 85%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  padding-right: 30px;
`;

export const AdressText = styled.h2`
  font-family: 'Roboto';
  font-weight: 200;
`;

export const ButtonVoltar = styled.button`
  cursor: pointer;
  height: 3.2rem;
  width: 10rem;
  outline: none;
  border: solid 1px #fff;
  color: #ffffff;
  display: flex;
  align-self: flex-end;
  bottom: 20px;
  right: 20px;
  padding: 12px;
  position: fixed;
  border-radius: 12px;
  background: #ff3838;
  font-family: 'Roboto';
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;

  transition: all 0.1s ease-in-out;
`;
