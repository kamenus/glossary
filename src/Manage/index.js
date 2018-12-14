import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

export default({
  terms,
  termin,
  description,
  inputHandler,
  terminHandler,
  deleteTermin,
  addNewWord,
  isOnChange,
  changeCanceler,
}) => (
  <div>
    <div className="wordCreator">
      <div>
        <input 
          className="addInput"
          type="text"
          placeholder="Add new termin"
          value={termin}
          onChange={inputHandler('termin')}
        />
        <input 
          className="addButton"
          type="submit"
          value="Add termin"
          onClick={terminHandler}
          disabled={!termin.match(/^(?!\s*$).+/g)}
        />
      </div>
      <div>
        <textarea
          rows="10" 
          className="addTextArea"
          type="textarea"
          placeholder="description"
          onChange={inputHandler('description')}
          value={description}
        />
        { isOnChange && <Link to="/">
          <input 
            className="addButton"
            type="submit"
            value="Cancel"
            onClick={changeCanceler}
          />
        </Link>}
        <Link to="/">
          <input
            className="addButton"
            type="submit"
            value="Apply changes"
            onClick={addNewWord}
            disabled={!(terms.length && description)}
          />
        </Link>  
      </div>  
      <div>
        <ul>
          {terms.map(termin => (
            <li key={termin.id}>
              {termin.title}
              <button 
                onClick={() => deleteTermin(termin.id)}
              >
                delete
              </button>
            </li>  
          ))}
        </ul>  
      </div>
    </div>
  </div>  
)