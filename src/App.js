import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Produtos } from './pages/Produtos';

import { AppProvider } from './context/AppContext';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
