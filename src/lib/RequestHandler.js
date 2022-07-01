import axios from "axios";

export const urlBurguerApi = "http://localhost:5000";

export const getMenu = async () => {
  const res = await axios.get(urlBurguerApi + "/products");
  return res.data;
};

export const getProducts = async () => {
  const res = await axios.get(urlBurguerApi + "/products");
  return res.data;
};


export const addOrder = async (order, client) => {
  console.log(order);
  console.log(client);
  const arrayProducts = order.products.map(function (product) {
    return {
      productId: product.id,
      qty: product.qty,
      name: product.name,
      img: product.image,
      price: product.price,
    };
  });
  const testOrder = { userId: "user", client: client, products: arrayProducts };

  console.log(testOrder);
  const res = await axios.post(urlBurguerApi + "/orders", testOrder);

  return res.data;
};
 

export const addProduct = async (newProduct) => {
  const res = await axios.put(
    urlBurguerApi + "/products/" + newProduct.id,
    newProduct
  );
  return res.data;
};

export const postStock = async (arrayData) => {
  const res = await axios.post(urlBurguerApi + "/products", arrayData);

  return res;
};

export const deleteStock = async (id) => {
  const res = await axios.delete(urlBurguerApi + "/products/" + id);
  console.log(res.data);
  return res.data;
};

export const getOrder = async () => {
  const res = await axios.get(urlBurguerApi + "/orders");
  console.log(res);
  return res.data;
};


export const deleteOrder = async (id) => {
  const res = await axios.delete(urlBurguerApi + "/orders/" + id);
  return res.data;
};

export const getOrderKitchen = async () => {
  const res = await axios.get(urlBurguerApi + "/orders");
  return res.data;
};

export const addOrderDone = async (client, orderId, selectedOrder) => {
  const testOrderDone = {
    orderId: orderId,
    client: client,
    products: selectedOrder,
  };
  const res = await axios.post(urlBurguerApi + "/ordersDone", testOrderDone);

  return res.data;
};

export const getOrdersDone = async () => {
  const res = await axios.get(urlBurguerApi + "/ordersDone");
  return res.data;
};
