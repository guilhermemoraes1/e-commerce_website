import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './views/Home';
import Contatos from './views/Contatos';
import Sobre from './views/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router';
import Principal from './layouts/Principal';
import Entre from './views/Entre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}>
          <Route index element={<Home />} />
          <Route path="contatos" element={<Contatos />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="entre" element={<Entre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
