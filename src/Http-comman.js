import axios from "axios";  
  
export default axios.create({  
  baseURL: "https://localhost:44314/",  
  headers: {  
    "Content-type": "application/json"  
  }  
});  