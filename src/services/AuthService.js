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
  let id = Math.floor(Math.random() * 99999999);
  const allData = {
    candidateId: candidateId,
    id: id,
    candidateName: candidateName,
    companyId: companyId,
    companyName: companyName,
    interviewDate: interviewDate,
    phase: phase,
    status: status,
    note: note,
  };
  let accsessKey = `Authorization: Bearer ${key}`;
  axios.put(
    "http://localhost:3333/api/reports",
    {
      headers: accsessKey,
    },
    {
      data: allData,
    }
  );
};

export { isAdmin, SubmitNewReport };
