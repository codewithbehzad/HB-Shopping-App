import axios from "axios";

//fetch('https://fakestoreapi.com/products')

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
  // console.log(response.data);
};

export { getProducts };
