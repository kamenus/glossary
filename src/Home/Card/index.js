import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default ({
  description,
  terms,
  deleteCard,
  cardChanger,
  id,
  deleteManager,
  isOnDelete,
  idOnDelete
}) => (
  <div className="card">
    <div className="cardInfo">
      <div className="termins">
        {
          terms.map(term => (
            <p key={term.id}>{term.title}</p>
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
          onClick={() => deleteManager(id)}
        >
          Delete
        </span>
      </div>
      {
        isOnDelete && 
        <div className="modalDelete">
          <div className="modalContent">
            <p>
              Do you want to delete this card?
            </p>
            <button
              onClick={() => { 
                deleteCard(idOnDelete); 
                deleteManager() 
              }}
            >
              Yes
            </button>
            <button
              onClick={deleteManager}
            >
              Nope
            </button>
          </div>  
        </div>
      }
    </div>  
    <hr />
  </div>
)