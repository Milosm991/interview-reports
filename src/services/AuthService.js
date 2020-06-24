import axios from "axios";

const isAdmin = ({ email, password }) => {
  return axios.post("http://localhost:3333/login", { email, password });
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
  let id = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
  const allData = {
    id: id,
    candidateName: candidateName,
    candidateId: candidateId,
    companyId: companyId,
    companyName: companyName,
    interviewDate: interviewDate,
    phase: phase,
    status: status,
    note: note,
  };
  axios.put(`http://localhost:3333/api/reports?accessToken=${key}`, allData);
};

export { isAdmin, SubmitNewReport };
