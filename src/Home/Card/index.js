import React from 'react';
import './index.css';

export default ({
  description,
  terms,
  deleteCard,
  id,
}) => (
  <div className="card">
    <div className="cardInfo">
      <div className="termins">
        {
          terms.map(term => (
            <p>{term.title}</p>
          ))
        }
      </div>
      <div className="description"> 
        <p>{description}</p>
      </div>
      <div>
        <span
          className="changeBtn"
        >
          Change
        </span><br />
        <span
          className="deleteBtn"
          onClick={() => deleteCard(id)}
        >
          Delete
        </span>
      </div>
    </div>  
    <hr />
  </div>
)