import {
  Container,
  Content,
  FooterDescription,
  LogoFooter,
  OmnetDescription,
} from './styles';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <OmnetDescription>
          <LogoFooter />
          <FooterDescription>
            Nos destacamos oferecendo serviços de alta qualidade e agregando
            valor máximo aos nossos clientes.
          </FooterDescription>
        </OmnetDescription>
      </Content>
    </Container>
  );
};
