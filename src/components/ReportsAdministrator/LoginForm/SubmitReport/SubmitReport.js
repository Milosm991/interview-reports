import React from 'react'
import { CandidatesServise } from '../../../../services/CandidatesServise'
import { Candidate } from './Candidate/Candidate'
import style from './SubmitReport.module.css'
import { Button } from 'react-bootstrap'

class SubmitReport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: null,
            candidateId: 0,
            candidateName: "",
            companyId: 0,
            companyName: "",
            interviewDate: "",
            phase: "",
            status: "",
            note: "",
            candidateImage: null
        }
    }
    componentDidMount() {
        new CandidatesServise()
            .fetchAll().then(res => this.setState({ characters: res.data }))
    }
    getCandidate = (item) => {
        let a = this.state.characters.filter(character => item === character)
        this.setState({
            candidateId: a[0].id,
            candidateName: a[0].name,
            candidateImage: a[0].avatar
        })
    }
    render() {
        return <div>
            <div className={style.SubmitReport__wrapper}>
                <div className={style.typeOfAction}>
                    <p className={style.paragraph}>1.  Select Candidate</p>
                    <p className={style.paragraph}>2.  Select Company</p>
                    <p className={style.paragraph}>3.  Fill Report Deatails</p>
                    <div>{this.state.candidateId !== 0 ? <img src={this.state.candidateImage} /> : null}</div>
                </div>
                <div className={style.candidates}> {this.state.characters !== null ? this.state.characters.map(item => <Candidate candidate={item} getInfoForSubmit={this.getCandidate} />) : null}</div>
            </div>;
            <Button className={style.btn}>Next</Button>

        </div>
    }
}
export { SubmitReport }