import { FaTrash } from "react-icons/fa";

function Cart({ cart, setCart }) {

  const cartTotal = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );

    setCart(updatedCart);
  };

  // Remove product
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (product) => product.id !== id
    );

    setCart(updatedCart);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "70vh",
        color: "#23231e",
        fontFamily: "'Inter', sans-serif",
      }}
    >

      {/* Heading */}
      <h3
        className="m-2 fw-semibold mb-4"
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "28px",
          letterSpacing: "-0.5px",
        }}
      >
        Cart Summary
      </h3>

      <div className="row g-4">

        {/* Cart Table */}
        <div className="col-12 col-lg-8">

          <div className="table-responsive">

            <table className="table table-bordered align-middle">

              <thead>
                <tr>
                  <th>Serial.no</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {cart.map((product, index) => (
                  <tr key={product.id}>

                    <td>{index + 1}</td>

                    <td style={{ minWidth: "180px" }}>
                      {product.title}
                    </td>

                    <td>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{
                          width: "120px",
                          height: "140px",
                          objectFit: "contain",
                        }}
                      />
                    </td>

                    <td>
                      {product.price}
                    </td>

                    <td>

                      <div className="d-flex align-items-center gap-2">

                        <button
                          className="btn btn-outline-success btn-sm"
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                        >
                          +
                        </button>

                        <span className="px-2 py-1 border rounded bg-light">
                          {product.quantity}
                        </span>

                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                        >
                          -
                        </button>

                      </div>

                    </td>

                    <td>
                      {product.price * product.quantity}
                    </td>

                    <td>

                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                      >
                        <FaTrash className="text-light" />
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Cart Total */}
        <div className="col-12 col-lg-4">

          <div className="border border-2 p-3 rounded shadow bg-primary text-light">

            <h4>
              Cart Total: <span>{cartTotal.toFixed(2)}</span>
            </h4>

            <div className="d-grid">

              <button
                className="btn btn-success"
                onClick={() =>
                  alert("Order Placed Successfully!!!")
                }
              >
                Checkout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;