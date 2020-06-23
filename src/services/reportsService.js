import axios from 'axios'

export const allReports = () => {
    return axios.get('http://localhost:3333/api/reports')
}