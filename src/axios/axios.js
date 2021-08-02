import axios from "axios";

export default axios.create({
    baseURL: 'https://todoapp-fe6c9-default-rtdb.firebaseio.com/'
})
