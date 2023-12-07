import config from "../config";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer 97a77aee18a5698e450be62e96fa26e2ad3681faaad81928e1a8fbf59ba65cea24a056a6d07c5356f74874a753b3105750f0801121a92d95d67b4b07c07dfd7ba4b0cd5176d3e690b350d2a8637a5ab4d82be5bc8676c55bcf218885857d9b8dc6f8ffc202d96e40ab485a6f9e725e4253ae13dee665c3d125322e63033e0d7c"
);

var requestOptions: any = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const productDataProvider = {
  getProduct: async (id: string) => {
    const response = await fetch(
      `${config.API_URL}/api/products/${id}`,
      requestOptions
    )

    const data = await response.json()
    return data
  },
  getProducts: async () => {
    const response = await fetch(
      // `${config.API_URL}/api/products?populate[images][fields][0]=name&populate[images][fields][1]=url`,
      `${config.API_URL}/api/products?populate=*`,
      requestOptions
    )

    const data = await response.json()
    return data
  },
};


export default productDataProvider;