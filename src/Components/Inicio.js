import Carousel from "react-bootstrap/Carousel";

function Inicio() {
  const itemStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <Carousel data-bs-theme="light" controls={true} style={itemStyle}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="foto inicio2.webp" alt="Primera viñeta" />
        <Carousel.Caption style={{ backgroundColor: "#00000080" }}>
          {/*TODO: Meter el style en un .css*/}
          <h1>¡INSTALACIONES MODERNAS!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="foto inicio4.webp" alt="Segunda viñeta" />
        <Carousel.Caption style={{ backgroundColor: "#00000080" }}>
          <h1>¡GRAN MOTIVACIÓN!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src="foto inicio5.webp" alt="Tercera viñeta" />
        <Carousel.Caption style={{ backgroundColor: "#00000080" }}>
          <h1>¡SOMOS SIMPÁTICOS!</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Inicio;
