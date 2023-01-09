import axios from "axios";

type signUpProps = {
  email: string;
  password: string;
};

export const signUp = async ({ email, password }: signUpProps) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/users/create",
      method: "post",
      data: { email, password },
    });
    return response.data;
  } catch (error) {
    console.dir(error);
  }
};
