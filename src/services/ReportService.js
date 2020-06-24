import axios from "axios";

class ReportService {
  static fetch(candidateId) {
    return axios
      .get(`http://localhost:3333/api/reports?candidateId=${candidateId}`)
      .then((report) => report.data);
  }
}

export { ReportService };
