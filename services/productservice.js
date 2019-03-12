class ProductService {
    constructor() {
        this.url = "http://apiapptrainingservice.azurewebsites.net/api/Products";
    }
    getProducts() {
        let promise = fetch(this.url);
        return promise;
    }
    postProduct(product) {
        let promise = fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        return promise;
    }

    putProduct(product) {
        let promise = fetch(`${this.url}/${product.ProductRowId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        return promise;
    }
    deleteProduct(product) {
        let promise = fetch(`${this.url}/${product.ProductRowId}`, {
            method: "DELETE"
        });
        return promise;
    }
}

export default ProductService;