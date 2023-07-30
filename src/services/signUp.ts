import axios from "axios";
const { VITE_USERS_URI } = import.meta.env;

class SignUpService {
  signUp = async ({
    username,
    email,
    role,
    password,
  }: {
    username: FormDataEntryValue;
    email: FormDataEntryValue;
    role: FormDataEntryValue[];
    password: FormDataEntryValue;
  }) => {
    try {
      const response = await axios.post(`${VITE_USERS_URI}/api/auth/signup`, {
        username,
        email,
        password,
        role,
      });
      return response;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.message);
        if (err.response) {
          console.error("Response status:", err.response.status);
          console.error("Response data:", err.response.data);
        }
        return err.response;
      } else {
        console.error("Other error:", err);
        throw new Error("Other error occurred");
      }
    }
  };
}

const signUpService = new SignUpService();

export default signUpService;
