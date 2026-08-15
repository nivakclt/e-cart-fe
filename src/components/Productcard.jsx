import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ product ,addToCart }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            width: "100%",
            height: "250px"
          }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <div className="d-grid">
            <Button variant="primary" className="btn btn-dark" onClick={()=>addToCart(product)}>
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
