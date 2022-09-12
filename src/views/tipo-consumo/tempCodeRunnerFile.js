const API ="https://lovely-lace-production.up.railway.app"
    const fetchAPI = async () => {
        const url = await fetch(`${API}/view/products`);
        const getData = await url.json();
        console.log(getData);
      }