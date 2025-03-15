import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from 'mdb-react-ui-kit';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <MDBFooter
        className="text-center text-lg-start"
        style={{ color: '#FAFAFA'}}
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3 pt-3">
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="fw-bold mb-4">
                  Exclusive
                </h6>
                <p>
                  <strong>Assinar</strong>
                </p>
                <p>
                  Ganhe 10% de desconto no primeiro pedido
                </p>
                <input type="text" />
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="fw-bold mb-4">
                  Suporte
                </h6>
                <p>
                  Guarabira, Paraíba, Brasil.
                </p>
                <p>
                  exclusive@gmail.com
                </p>
                <p>
                  83 91234-5678
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="fw-bold mb-4">
                  Conta
                </h6>
                <p>
                  Minha Conta
                </p>
                <a href='/criarConta'>
                  <p>
                    Login / Registrar
                  </p>
                </a>
                
                <p>
                  Carrinho
                </p>
                <p>
                  Lista de Desejos
                </p>
                <p>
                  Loja
                </p>
              </MDBCol>


              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="fw-bold mb-4">Ajuda</h6>
                <p>
                  Politicas de Privacidade
                </p>
                <p>
                  Termos De Uso
                </p>
                <p>
                  Perguntas Frequentes
                </p>
                <p>
                  Contatos
                </p>
              </MDBCol>

            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ 
            backgroundColor: 'rgb(0, 0, 0)',
            borderTop: '1px solid rgba(255, 255, 255, 0.4)'
          }}
        >
          © 2025 Copyright. All right reserved
        </div>
      </MDBFooter>
    </footer>
  );
};

export default Footer;
