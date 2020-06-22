import React from 'react';
import style from './Candidate.module.css'

const Candidate = ({ candidate, getInfoForSubmit }) =>
    (<div className={style.wrapper} onClick={() => getInfoForSubmit(candidate)}> {candidate.avatar !== ''
        ?
        <img src={candidate.avatar} alt="character avatar" className="Candidate__image" /> :
        <img src={'https://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg'} alt="character avatar" className="Candidate__image" />
    }
        <div className={style.paragraph}>
            <p>{candidate.name}</p>
            <p>{candidate.email}</p>
        </div>
    </div >
    )

export { Candidate }