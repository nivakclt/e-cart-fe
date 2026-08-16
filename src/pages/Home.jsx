import { useEffect, useState } from "react";
import ProductCard from "../components/Productcard";
import { addCartApi, updateCartApi } from "../services/Api";

function Home({ cart, setCart }) {
  // State to store products
  const [products, setProducts] = useState([]);

  // Get products from Fake Store API
  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  // Get products when Home loads
  useEffect(() => {
    getData();
  }, []);

  // Add product to cart
  const addToCart = async (product) => {
    // Check whether this product already exists in the cart
    const existingProduct = cart.find(
      (item) => item.productId === product.id
    );

    // Product already exists
    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };

      // Update existing cart record in server
      const response = await updateCartApi(
        existingProduct.id,
        updatedProduct
      );

      // Update React cart state
      const updatedCart = cart.map((item) =>
        item.id === existingProduct.id ? response.data : item
      );

      setCart(updatedCart);
    }

    // Product does not exist
    else {
      const newProduct = {
        ...product,
        productId: product.id,
        quantity: 1,
      };

      // Add new product to server
      const response = await addCartApi(newProduct);

      // Add server response to React cart state
      setCart((prevCart) => [...prevCart, response.data]);
    }
  };

  return (
    <div
      className="container-fluid p-5"
      style={{ minHeight: "70vh" }}
    >
      <div className="d-flex justify-content-around gap-3 flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;