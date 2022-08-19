import axios from "axios";

export class ProductService {

  url = "http://localhost:4000/tipo_consumo";
  // url = "ciber-med-api.herokuapp.com"


    create(product){
        return axios.post(this.baseUrl, product).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(product){
        return axios.put(this.baseUrl+"/"+product._id, product).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+"/"+id).then(res => res.data);
    }
}