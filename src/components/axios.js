import axios from 'axios'
const instance=axios.create({
    baseURL:'http://127.0.0.1:5001/clone-8f24d/us-central1/api', // api_key 
});
export default instance
