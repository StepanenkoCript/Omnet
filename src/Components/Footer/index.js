import {
  Container,
  Content,
  FooterDescription,
  FooterP,
  FooterTitulo,
  LogoFooter,
  FooterList,
  FooterListLarge,
  SocialLogo,
} from './styles';

import whatsapp from '../../Assets/Images/whatsapp.png';
import linkedin from '../../Assets/Images/linkedin.png';
import instagram from '../../Assets/Images/instagram.png';
import twitter from '../../Assets/Images/twitter.png';
import facebook from '../../Assets/Images/facebook.png';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterList>
          <LogoFooter />
          <FooterDescription>
            Nos destacamos oferecendo serviços de alta qualidade e agregando
            valor máximo aos nossos clientes.
          </FooterDescription>
        </FooterList>
        <FooterList>
          <FooterTitulo>Produtos</FooterTitulo>
          <FooterP>Aparelhos</FooterP>
          <FooterP>Banda larga</FooterP>
          <FooterP>Internet móvel</FooterP>
        </FooterList>
        <FooterList>
          <FooterTitulo>Sobre</FooterTitulo>
          <FooterP>Conheça a empresa</FooterP>
          <FooterP>Política de privacidade</FooterP>
          <FooterP>Regulamentos</FooterP>
        </FooterList>
        <FooterListLarge>
          <FooterTitulo>Conecte-se conosco</FooterTitulo>
          <SocialLogo src={whatsapp} />
          <SocialLogo src={linkedin} />
          <SocialLogo src={instagram} />
          <SocialLogo src={twitter} />
          <SocialLogo src={facebook} />
        </FooterListLarge>
      </Content>
    </Container>
  );
};
