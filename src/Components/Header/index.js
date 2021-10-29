import { Container, Content, Link, Logo, NavLinks } from './styles';
import logo from '../../Assets/Images/Logo.png';

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo src={logo} />
        <NavLinks>
          <Link to={{ pathname: '' }}>Sobre</Link>
          <Link to={{ pathname: '/' }}>Home</Link>
          <Link to={{ pathname: '' }}>Produtos</Link>
          <Link to={{ pathname: '' }}>Perguntas frequentes</Link>
          <Link to={{ pathname: '' }}>Contato</Link>
        </NavLinks>
      </Content>
    </Container>
  );
};
