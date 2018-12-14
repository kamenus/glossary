import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default ({
  description,
  terms,
  deleteCard,
  cardChanger,
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
        <Link to="/manage">
          <span
            className="changeBtn"
            onClick={() => cardChanger(id)}
          >
            Change
          </span>
        </Link><br />
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