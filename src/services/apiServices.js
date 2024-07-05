let apiServices = {}

apiServices.allProducts = async () => {
    let url = `${process.env.BASE_API}/products?limit=100`;
    let response = await fetch(url).then(response => response.json()).catch(error => error)
    return response;
}

apiServices.searchedProducts = async (query, order) => {
    let url = `${process.env.NEXT_PUBLIC_BASE_API}/products/`;
    if (query) {
        url += `search?q=${query}`;

    } else if (!query && order) {
        url += `?sortBy=title&order=${order}`;
    } else {
        url += `?search?q=${query}&sortBy=title"&order=asc`;
    }
    let response = await fetch(url).then(response => response.json()).catch(error => error)
    return response;

}
export default apiServices