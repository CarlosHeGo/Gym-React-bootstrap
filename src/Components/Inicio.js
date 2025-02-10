import Carousel from 'react-bootstrap/Carousel';

function Inicio() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="foto inicio2.webp"
          alt="Primera viñeta"
        />
        <Carousel.Caption style={{ marginBottom: "25%", backgroundColor: "#00000080" }}>
          {/*TODO: Meter el style en un .css*/}
          <h1>¡INSTALACIONES MODERNAS!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="foto inicio4.webp"
          alt="Segunda viñeta"
        />
        <Carousel.Caption style={{ marginBottom: "25%", backgroundColor: "#00000080" }}>
          <h1>¡GRAN MOTIVACIÓN!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="foto inicio5.webp"
          alt="Tercera viñeta"
        />
        <Carousel.Caption style={{ marginBottom: "25%", backgroundColor: "#00000080" }}>
          <h1>¡SOMOS SIMPÁTICOS!</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Inicio;