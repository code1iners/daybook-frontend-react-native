import { axiosClient } from "@/api/axios";

interface Inputs {
  email: string;
  password: string;
}

export const signInService = async (inputs: Inputs) => {
  try {
    const response = await axiosClient.post("/api/v1/auth/login", inputs);
    console.log(response);
  } catch (err) {
    console.warn(err);
  }
};
