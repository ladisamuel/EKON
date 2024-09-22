import config from "../../../config";
import axios from "axios";

const baseUrl = `${config.backendURL}user`



const getAllUsers = async () => {
    return await axios.get(`${baseUrl}`, );
  };
  
  
const addUser = async (payload) => {
    return await axios.post(`${baseUrl}`, payload);
  };
    
  
const getSingleUser = async (id) => {
  return await axios.get(`${baseUrl}/id`, );
  };
  

const getSuperAdminUser = async () => {
  return await axios.get(`${baseUrl}/super admin`, );
  };
  
  
const getAdminUser = async () => {
  return await axios.get(`${baseUrl}/admin`, );
  }; 
  

export {
    getAllUsers,
    addUser,
    getSingleUser,
    getSuperAdminUser,
    getAdminUser,
}