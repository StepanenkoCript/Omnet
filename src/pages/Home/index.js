import React from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Content,
  FormContainer,
  HeroContainer,
  HeroImage,
  HeroTitle,
  HeroDescription,
  Form,
  FormTitle,
  FormInput,
  FormSubTitle,
  FormButton,
  Error,
} from './styles';

export const Home = () => {
  const { cep, setCep, setAddress } = React.useContext(AppContext);
  const navigation = useNavigate();
  const [error, setError] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      try {
        const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = await result.json();
        setAddress({
          bairro: json.bairro,
          cidade: json.localidade,
          uf: json.uf,
        });
        navigation('/produtos');
      } catch (err) {}
    }
  }

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleChangeCep(value) {
    if (error) validateCep(value);
    setCep(value);
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  console.log(cep);

  return (
    <Container>
      <Content>
        <HeroContainer>
          <HeroImage />
          <HeroTitle>Um lugar onde velocidade é lei.</HeroTitle>
          <HeroDescription>
            Acelere na velocidade banda larga com a fibra da Omnet.
          </HeroDescription>
        </HeroContainer>
        <FormContainer>
          <Form>
            <FormTitle>Insira seu CEP:</FormTitle>
            <FormInput
              error={error ? true : false}
              type="number"
              value={cep}
              onChange={handleChangeCep}
              placeholder="00000-000"
              onBlur={handleBlur}
            />
            <Error>{error}</Error>
            <FormSubTitle>*Listaremos as ofertas de sua região.</FormSubTitle>
            <FormButton onClick={handleSubmit}>Buscar</FormButton>
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
};
