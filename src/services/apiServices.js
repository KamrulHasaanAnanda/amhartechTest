let apiServices = {}

apiServices.allProducts = async () => {
    let url = `${process.env.BASE_API}/products?limit=100`;
    // console.log("url",url)
    let response = await fetch(url).then(response => response.json()).catch(error => error)
    // console.log('response', response)
    // let data = await response.json();
    // if (data.products.length > 0) data.products;
    // else[]
    return response;

}
export default apiServices