import axios from "axios"

export class ProductServices  {

    url = "http://localhost:4000";
    // url = "ciber-med-api.herokuapp.com"

    postProduct(product){
        return axios.post(`${this.url}/tipo_consumo`, product).then(res => res.data);
    }

    getProduct(){
        return axios.get(`${this.url}/tipo_consumo`).then(res => res.data);
    }

    putProduct(product){
        return axios.post(`${this.url}/tipo_consumo/${product.id}`, product).then(res => res.data);
    }

    deleteProduct(id){
        return axios.post(`${this.url}/tipo_consumo/${id}`).then(res => res.data);
    }
}