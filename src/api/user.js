import { API_URL } from "../utils/constans";

export async function registerApi(formData) {
    try {
      const url = `${API_URL}/auth/local/register`;
      const params = {
          method: "POST",
          Headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      };

      const response = await fetch(url, params);
      const result = await response.json();
      return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}