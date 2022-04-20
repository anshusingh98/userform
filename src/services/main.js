import axios from "axios";
import * as URL from "../utils/url1";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("AutherizationToken")}`,
  },
};

export const getCollegesAPIL = (collegeName, country) => {
    return axios.get(`${URL.getColleges1}${collegeName}${country? "&country=" + country : {country}}`);
}