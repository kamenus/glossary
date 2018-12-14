import React from 'react';
import './index.css';

export default ({
  description,
  terms,
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
        <a>Change</a><br />
        <a>Delete</a>
      </div>
    </div>  
    <hr />
  </div>
)