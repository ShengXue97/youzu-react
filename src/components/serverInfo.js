import axios from 'axios'; 

var serverInfo= "http://localhost,3003";
const ip = serverInfo.split(",")[0]
const port = serverInfo.split(",")[1]

axios.post(ip + ":" + port + "/ping", {timeout : 1000 * 3})
.then(response => {
})
.catch(error => {
    var serverInfo= "http://ycampus.southeastasia.cloudapp.azure.com,3003";
    serverInfo= "http://localhost,3003";
})
export default serverInfo;