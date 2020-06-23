import Axios from "axios";

class CandidateService {
  static fetchAll() {
    return Axios.get("http://localhost:3333/api/candidates").then(
      (candidates) => candidates.data
    );
  }
}

export { CandidateService };
