    import axios from "axios";

export class ProductService{

    url = "https://cyber-med-production.up.railway.app"
    //url = "http://localhost:4000"

    create(uso){
        return axios.post(`${this.url}/tipo_uso`,uso).then(res => res.data);
    };

    readAll(){
        return axios.get(`${this.url}/tipo_uso`).then( (res) => res.data);
    };

    update (uso){
        return axios.put(`${this.url}/tipo_uso/${uso.id}`,uso).then(res=>res.data);
    };

    delete(id){
        return axios.delete(`${this.url}/tipo_uso/${id}`).then(res=>res.data)
    };
}