import React from 'react';
import style from './Candidate.module.css'

const Candidate = ({ name, email, avatar }) =>
    (<div className={style.wrapper}> {avatar !== ''
        ?
        <img src={avatar} alt="character avatar" className="Candidate__image" /> :
        <img src={'https://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg'} alt="character avatar" className="Candidate__image" />
    }
        <div className={style.paragraph}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    </div >
    )

export { Candidate }