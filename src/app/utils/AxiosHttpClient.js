import axios from "axios";
import AppConfig from "../config/AppConfig";

export default axios.create({
  baseURL: AppConfig.baseApiProviderUrl
});