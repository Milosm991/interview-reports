import axios from "axios";

class CandidateService {
  static fetchAll() {
    return axios
      .get("http://localhost:3333/api/candidates")
      .then((candidates) => candidates.data);
  }
  static fetch(id) {
    return axios
      .get(`http://localhost:3333/api/candidates/${id}`)
      .then((candidate) => candidate.data);
  }
}

export { CandidateService };
