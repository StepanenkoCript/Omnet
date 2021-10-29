import React from 'react';

import {
  PlanosCards,
  TopCards,
  OfertaLista,
  TituloCards,
  MesCards,
  BottomCards,
  ListaCard,
  ComprarButton,
} from './styles';

export const OfferCard = (props) => {
  const moeda = Number(props.data.price / 100).toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 0,
  });

  return (
    <PlanosCards>
      <TopCards cor={'#FF641C'}>
        <OfertaLista>{props.data.name}</OfertaLista>
        <TituloCards>{moeda}</TituloCards>
        <MesCards>por mês</MesCards>
      </TopCards>
      <BottomCards>
        {props.data.description.map((info) => (
          <ListaCard>{info}</ListaCard>
        ))}

        <ComprarButton>Comprar</ComprarButton>
      </BottomCards>
    </PlanosCards>
  );
};
