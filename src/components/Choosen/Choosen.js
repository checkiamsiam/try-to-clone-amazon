import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Chosen.css'

const Choosen = ({data}) => {
  return (
    <div>
      <div className="box">
        <img className='data-icon' src={data.img} alt="" />
        <p className='data-name'>{data.name}</p>
        <div className="delete-icon">
         <FontAwesomeIcon icon={faTrash}/>
        </div>
      </div>
    </div>
  );
};


export default Choosen;