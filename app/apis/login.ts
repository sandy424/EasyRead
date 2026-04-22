import axios from "axios";

export async function getPrivateQuestions() {
  try {
    const response = await axios.get('http://15.164.30.134:13001/private-questions');
    return(response.data)
  } catch (error) {
    return(error);
  }
}