import axios from "axios";

class CompanyService {
  fetchAll() {
    return axios.get("http://localhost:3333/api/companies");
  }
}
export { CompanyService };
