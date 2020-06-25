import axios from "axios";

const isAdmin = ({ email, password }) => {
  return axios
    .post("http://localhost:3333/login", { email, password })
    .then((res) => {
      const token = res.data.accessToken;
      sessionStorage.setItem("accsesKey", JSON.stringify(token));

      return token;
    });
};

const SubmitNewReport = ({
  candidateName,
  candidateId,
  companyId,
  companyName,
  interviewDate,
  phase,
  status,
  note,
}) => {
  let key = JSON.parse(sessionStorage.getItem("accsesKey"));

  const allData = {
    candidateId: candidateId,
    candidateName: candidateName,
    companyId: companyId,
    companyName: companyName,
    interviewDate: interviewDate,
    phase: phase,
    status: status,
    note: note,
  };

  return axios({
    method: "POST",
    url: "http://localhost:3333/api/reports",
    headers: {
      Authorization: `Bearer ${key}`,
    },
    data: allData,
  });
};

const removeReportFromServer = (id) => {
  let key = JSON.parse(sessionStorage.getItem("accsesKey"));
  return axios({
    method: "DELETE",
    url: `http://localhost:3333/api/reports/${id}`,
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
};

const isLoggedIn = () => {
  if (sessionStorage.getItem("accsesKey") !== "") {
    let key = JSON.parse(sessionStorage.getItem("accsesKey"));
    if (key) {
      return true;
    } else {
      return false;
    }
  }
};
export { isAdmin, SubmitNewReport, removeReportFromServer, isLoggedIn };
