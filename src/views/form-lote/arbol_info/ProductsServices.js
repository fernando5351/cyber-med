import axios from "axios";

export class ProductService {
    url = "https://cyber-med-production.up.railway.app";


    create(lote) {
        return axios.post(`${this.url}/lote`,lote).then(res=>res.data)
    }

    readAll(){
        return axios.get(`${this.url}/lote`).then((res)=> res.data);
    }

    update(lote){
        return axios.put(`${this.url}/lote/${lote.id}`,lote).then(res=>res.data);
    }

    delete(id){
        return axios.delete (`${this.url}/lote/${id}`).then(res=>res.data)
    }
}