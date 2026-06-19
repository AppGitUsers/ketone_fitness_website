import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE;

export const adminLogin = async (username, password) => {
  return await axios.post(`${API_URL}/api/admin/login/`, { username, password });
};

export const getEnquiries = async () => {
  return await axios.get(`${API_URL}/api/enquiries/`);
};

export const deleteEnquiry = async (id) => {
  return await axios.delete(
    `${API_URL}/api/enquiry/${id}/`
  );
};

export const updateEnquiryStatus = async (
  id,
  status
) => {
  return await axios.patch(
    `${API_URL}/api/enquiry/update/${id}/`,
    {
      status,
    }
  );
};

export const createEnquiry = async (data) => {
  return await axios.post(
    `${API_URL}/api/enquiry/`,
    data
  );
};
