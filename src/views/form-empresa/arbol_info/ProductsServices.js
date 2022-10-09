import axios from "axios"
export class ProductService {

    //url = "http://localhost:4000";
    url = "https://lovely-lace-production.up.railway.app"

    create(empresa){
        return axios.post(`${this.url}/empresa`, empresa).then(res => res.data);
    }

    readAll(){
        return axios.get(`${this.url}/empresa`).then((res) => res.data);
    }

    update(empresa){
        return axios.put(`${this.url}/empresa/${empresa.id}`, empresa).then(res => res.data);
    }

    delete(id){
        return axios.delete(`${this.url}/empresa/${id}`).then(res => res.data);
    }
}