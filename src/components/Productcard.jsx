import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard() {
  return (
    <>
      <Card style={{width:'18rem'}}>
        <Card.Img
          variant="top"
          src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/apple/494741644/0/KOEsdSJnzU-w2UMH0w2JC-AppleiPhone17ProMax-MP-494741644-i-1-1200Wx1200H.jpeg"
        />
        <Card.Body>
          <Card.Title>IPHONE 17 PRO</Card.Title>
          <Card.Text>RS.1,30,000</Card.Text>
          <div className="d-grid">
          <Button variant="primary" className="btn btn-dark">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
