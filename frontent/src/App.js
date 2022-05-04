import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import Home from './screens/Home';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">
          <div>All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
