import axios from 'axios';

class AxiosProductService {
    constructor() {
        this.url = "http://apiapptrainingservice.azurewebsites.net/api/Products";
    }
    getProducts() {
        let promise = axios.get(this.url);
        return promise;
    }
    postProduct(product) {
        let promise = axios.post(this.url, product);
        return promise;
    }


}

export default AxiosProductService;