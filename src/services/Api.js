 import axiosInstance from "./axiosInstance";
// GET cart
export const getCartApi = () => {
  return axiosInstance.get("/cart");
};

// POST - add new product to cart
export const addCartApi = (product) => {
  return axiosInstance.post("/cart", product);
};

// PATCH - update quantity
export const updateCartApi = (id, product) => {
  return axiosInstance.patch(`/cart/${id}`, product);
};

// DELETE - remove product
export const deleteCartApi = (id) => {
  return axiosInstance.delete(`/cart/${id}`);
};