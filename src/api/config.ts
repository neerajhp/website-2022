import axios from "axios";
import { MEDIUM_RSS_BASE, RSS2JSON_BASE_URL } from "../constants";

/**
 * Configuration file for Axios
 *
 * @author Neeraj Patel
 */

export default axios.create({
  baseURL: RSS2JSON_BASE_URL + MEDIUM_RSS_BASE,
});
