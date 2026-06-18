import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE;

export const getEnquiries = async () => {
  return await axios.get(`${API_URL}/enquiries/`);
};

export const deleteEnquiry = async (id) => {
  return await axios.delete(
    `${API_URL}/enquiry/${id}/`
  );
};

export const updateEnquiryStatus = async (
  id,
  status
) => {
  return await axios.patch(
    `${API_URL}/enquiry/update/${id}/`,
    {
      status,
    }
  );
};

export const createEnquiry = async (data) => {
  return await axios.post(
    `${API_URL}/enquiry/`,
    data
  );
};
