import { FaTrash } from "react-icons/fa";

function Cart({ cart }) {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          minHeight: "70vh",
          color: "#23231e",
          fontFamily: "'Inter',sans-serif",
        }}
      >
        {/* heading */}
        <h3
          className="m-2 fw-semibold mb-4"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "28px",
            letterSpacing: "-0.5px",
            marginBottom: "35px",
          }}
        >
          Cart Summary
        </h3>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <table className="table table-responsive table-bordered">
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
                {cart.map((product, index) => {
                  return (
                    <tr key={product.id}>
                      <td>{index + 1}</td>

                      <td>{product.title}</td>

                      <td>
                        <img
                          src={product.image}
                          alt={product.title}
                          height="200px"
                        />
                      </td>

                      <td>{product.price}</td>

                      <td className="d-flex justify-content-around">
                        <button className="btn btn-outline-success">
                          +
                        </button>

                        <span className="p-1 border rounded bg-light">
                          1
                        </span>

                        <button className="btn btn-outline-danger">
                          -
                        </button>
                      </td>

                      <td>
                        <button className="btn btn-danger">
                          <FaTrash className="text-light" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="border border-2 p-3 rounded shadow bg-primary text-light">
              <h4>
                Cart Total: <span>Rs.1,30,000</span>
              </h4>

              <div className="d-grid">
                <button className="btn btn-success">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;