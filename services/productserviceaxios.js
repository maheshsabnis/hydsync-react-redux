import
axios
from "axios";
class ProductServiceAxios {
    constructor() {
        this.url = "http://apiapptrainingservice.azurewebsites.net/api/Products";
    }

    getData() {
        let promise = axios.get(this.url);
        return promise;
    }
    postData(product) {
        let promise = axios.post(this.url, product);
        return promise;
    }
}

export default ProductServiceAxios;