import axiosInstance from "@/shared/axiousintance";


export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/users", { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};


export const getUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/user/${id}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};


export const createUserWithDetails = async (formData) => {
  try {
    const response = await axiosInstance.post("/user", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
