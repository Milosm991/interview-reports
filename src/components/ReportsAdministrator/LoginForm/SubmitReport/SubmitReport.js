import React from 'react'
import { CandidatesServise } from '../../../../services/CandidatesServise'
import { Candidate } from './Candidate/Candidate'
import './SubmitReport.css'
import { Link } from 'react-router-dom'

class SubmitReport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: null,
            candidateId: 9451057,
            candidateName: "",
            companyId: 92859858,
            companyName: "",
            interviewDate: "",
            phase: "",
            status: "",
            note: ""
        }
    }
    componentDidMount() {
        new CandidatesServise()
            .fetchAll().then(res => this.setState({ characters: res.data }))
    }
    getCandidate = (event) => {
        this.setState()
    }
    render() {
        return <div className="SubmitReport__wrapper">
            <div className="type-of-action">
                <Link><p className='SubmitReport__wrapper'>1 Select Candidate</p></Link>
                <Link><p className='SubmitReport__wrapper'>2 Select Company</p></Link>
                <Link><p className='SubmitReport__wrapper'>3 Fill Report Deatails</p></Link>
                <div>ASD</div>
            </div>
            <div className="candidates"> {this.state.characters !== null ? this.state.characters.map(item => <Candidate name={item.name} email={item.email} avatar={item.avatar} />) : null}</div>
        </div>;
    }
}
export { SubmitReport }