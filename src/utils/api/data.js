import config from "../../../config";
import axios from "axios";

const baseUrl = `${config.backendURL}data-entry`
// const baseUrl = `${config.backendURL}/data-entry/:id/`   for get 1

const getAllData = async () => {
    return await axios.get(`${baseUrl}`, );
  };
  

const addData = async (payload) => {
    return await axios.post(`${baseUrl}`, payload);
  };


const getSingleData = async () => {
return await axios.get(`${baseUrl}`, );
};


const getApprovedData = async () => {
return await axios.get(`${baseUrl}/approved`, );
};


const getPendingData = async () => {
return await axios.get(`${baseUrl}/pending`, );
}; 

export {
    getAllData,
    getSingleData,
    getApprovedData,
    getPendingData,
    addData
}