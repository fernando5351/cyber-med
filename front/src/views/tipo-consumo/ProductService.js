import axios from "axios"
export class ProductService {

  url = "http://localhost:4000/tipo_consumo";
   PostProduct = (RequestInit) => {
    fetch(`${this.url}`, RequestInit).then(res => res.data)
    .then( res => res.json() )
  }
  getProduct(){
    fetch(`${this.url}`).then(res => res.data)
    .then( res => res.json() )
  }
  readAll(){
    return axios.get(this.url).then(res => res.data);
}
  putProduct = (handleEdit, id) => {
    fetch(`${this.url}/${id}`, handleEdit).then(res => res.data)
    .then( res => res.json() )
  }
   delProduct = (handleDelete, id) => {
    fetch(`${this.url}/${id}`, handleDelete).then(res => res.data)
    .then( res => res.json() )
  }
}