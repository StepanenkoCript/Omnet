import React from 'react';
import { OfferCard } from '../../Components/OfferCard';
import { AppContext } from '../../context/AppContext';
import { HeroTitle } from '../Home/styles';
import { useNavigate } from 'react-router-dom';
import {
  AdressText,
  ButtonVoltar,
  Container,
  DivTitulos,
  NossosPlanos,
  PlanosContainer,
} from './styles';

export const Produtos = () => {
  const navigation = useNavigate();

  function handleBack() {
    navigation('/');
  }

  const { address } = React.useContext(AppContext);
  console.log(address);
  const userData = {
    zipcode: '',
    offers: [
      {
        name: 'Oferta 1',
        price: 5099,
        id: 1,
        isSelected: false,
        velocidade: '50 mbps',
        description: [
          'Utilização básica',
          'Acessar sites',
          'Compras online',
          'Redes sociais',
        ],
      },
      {
        name: 'Oferta 2',
        price: 10099,
        id: 2,
        isSelected: false,
        velocidade: '100 mbps',
        description: [
          'Utilização básica',
          'Acessar sites',
          'Jogar online',
          'Youtube e filmes',
        ],
      },
      {
        name: 'Oferta 3',
        price: 15099,
        id: 3,
        isSelected: false,
        velocidade: '300 mbps',
        description: [
          'Utilização avançada',
          'Hospedar servidores',
          'Assistir Netflix em 4k',
          'Downloads > 10gb',
        ],
      },
    ],
  };

  return (
    <Container>
      <DivTitulos>
        <NossosPlanos>Planos Internet Fibra</NossosPlanos>
        <HeroTitle>Nossos Preços</HeroTitle>
        <AdressText>
          Suas ofertas para {address.bairro} - {address.cidade} - {address.uf}
        </AdressText>
      </DivTitulos>
      <PlanosContainer>
        {userData.offers.map((oferta) => (
          <OfferCard key={oferta.id} data={oferta} />
        ))}
      </PlanosContainer>
      <ButtonVoltar onClick={handleBack}>Errei meu cep!</ButtonVoltar>
    </Container>
  );
};
