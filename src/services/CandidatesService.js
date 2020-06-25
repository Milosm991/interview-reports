import axios from "axios";

class CandidatesServise {
  fetchAll = () => {
    return axios.get("http://localhost:3333/api/candidates");
  };
}

export { CandidatesServise };
