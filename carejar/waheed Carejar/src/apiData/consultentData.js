import axios from "axios";

export const consultentData = async () => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/9333dbf6-2de9-4ba6-bb91-0bf23be19ffd"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching doctor data:", error);
    throw error;
  }
};
