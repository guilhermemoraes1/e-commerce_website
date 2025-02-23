
import { useState } from 'react';

const Contatos = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  let [nome, setNome] = useState('');

  const handleChange = (event) => {
    console.log(nome);
    setNome(event.target.value);
  };

  return (
    <>
      <div>Contatos</div>
    </>
  );
};

export default Contatos;
