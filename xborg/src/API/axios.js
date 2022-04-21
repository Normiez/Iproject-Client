import axios from "axios";

const url = axios.create({
  baseURL: "https://x-borg-project.herokuapp.com",
});

export default url;
