import { Container, Content, Link, Logo, NavLinks } from './styles';
import logo from '../../Assets/Images/Logo.png';

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo src={logo} />
        <NavLinks>
          <Link>Sobre</Link>
          <Link>Home</Link>
          <Link>Produtos</Link>
          <Link>Perguntas frequentes</Link>
          <Link>Contato</Link>
        </NavLinks>
      </Content>
    </Container>
  );
};
