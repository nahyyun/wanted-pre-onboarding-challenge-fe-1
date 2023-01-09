import axios, { AxiosError } from "axios";

type UserProps = {
  email: string;
  password: string;
};

export const signUp = async ({ email, password }: UserProps) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/users/create",
      method: "post",
      data: { email, password },
    });
    return response.data;
  } catch (error: Error | AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};

export const login = async ({ email, password }: UserProps) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/users/login",
      method: "post",
      data: { email, password },
    });
    return response.data;
  } catch (error: unknown) {
    console.dir(error);

    if (error instanceof AxiosError && error.response?.status === 400) {
      throw error.response.data;
    }
  }
};
