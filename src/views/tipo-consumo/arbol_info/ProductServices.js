import axios from 'axios'

export class ProductService {

    url = "http://localhost:4000";
    //url = "https://lovely-lace-production.up.railway.app"
    //url = "https://ciber-med-api.herokuapp.com"

    create(product){
        return axios.post(`${this.url}/tipo_consumo`, product).then(res => res.data);
    }

    readAll(){
        return axios.get(`${this.url}/tipo_consumo`).then(res => res.data);
    }

    update(product){
        return axios.put(`${this.url}/tipo_consumo/${product.id}`, product).then(res => res.data);
    }

    delete(id){
        return axios.delete(`${this.url}/tipo_consumo/${id}`).then(res => res.data);
    }
}