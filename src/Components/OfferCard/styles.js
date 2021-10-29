import styled from 'styled-components';

export const PlanosCards = styled.div`
  height: 70vh;
  width: 25%;
  margin: 10px;
  border-radius: 12px;
  min-width: 350px;
`;

export const TopCards = styled.div`
  height: 40%;
  max-height: 16rem;
  width: 100%;
  background-color: ${(props) => props.cor};
  border-radius: 12px 12px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BottomCards = styled.div`
  height: 60%;
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 12px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const OfertaLista = styled.h3`
  font-family: 'Roboto';
  color: #fff;
  font-size: 1.3rem;
  text-align: center;
  font-weight: 400;
  margin-bottom: 10px;
  padding: 5px;
  width: 10rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
`;

export const TituloCards = styled.h1`
  font-family: 'Roboto';
  color: #fff;
  font-size: 2.3rem;
  text-align: center;
`;

export const MesCards = styled.p`
  font-family: 'Roboto';
  color: #fff;
  font-size: 0.7rem;
  text-align: center;
`;

export const ListaCard = styled.li`
  font-family: 'Roboto';
  color: #232429;
  text-align: center;
  padding: 10px;
  font-weight: 500;
  list-style-type: none;
`;

export const ComprarButton = styled.button`
  cursor: pointer;
  height: 3.2rem;
  width: 10rem;
  outline: none;
  border: solid 1px #fff;
  color: #ffffff;

  border-radius: 12px;
  background: #ff641c;
  font-family: 'Roboto';
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;

  transition: all 0.1s ease-in-out;

  &:hover {
    border: solid 1px #fe641c;
    background: #eb4604;
  }
`;
