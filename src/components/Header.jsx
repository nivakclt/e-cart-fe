import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { TbBrandBunpo } from "react-icons/tb";

function Header({cart}) {
  return (
    <Navbar
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        padding: "0",
        background: "rgb(3, 3, 3)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <Container
      fluid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 48px",
        }}
      >
        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          style={{
            gap: "9px",
            textDecoration: "none",
          }}
        >
          <TbBrandBunpo
            size={35}
            style={{
              color: "#f5f5f5",
            }}
          />

          <h4
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "21px",
              letterSpacing: "0.3px",
              color: "#f5f5f5",
              margin: 0,
            }}
          >
            buynow.
          </h4>
        </Navbar.Brand>

        {/* Cart */}
        <Link
          to="/cart"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "9px 15px",
            borderRadius: "100px",
            textDecoration: "none",
            background: "rgb(255, 255, 255)",
            color: "#000000",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          Your Cart
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "21px",
              height: "21px",
              borderRadius: "50%",
              background: "#f90000d6",
            }}
          >
            {cart.length}
          </span>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
