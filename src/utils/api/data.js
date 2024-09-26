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

const getSingleData = async (id) => {
return await axios.get(`${baseUrl}/${id}`);
};

const editSingleData = async (payload) => {
return await axios.get(`${baseUrl}`, payload);
};
    

const getApprovedData = async () => {
return await axios.get(`${baseUrl}/status/approved`, );
};


const getPendingData = async () => {
return await axios.get(`${baseUrl}/status/pending`, );
}; 

export {
    getAllData,
    getSingleData,
    getApprovedData,
    getPendingData,
    addData,
    editSingleData
}