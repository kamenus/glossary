import React, { Component } from 'react';
import './index.css';
import Card from './Card/'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dictionary: this.props.dictionary,
    }

    this.deleteCard = this.props.deleteCard;

    this.searchRef = React.createRef();
    this.inputRef = React.createRef();
  }

  searchOnClick = () => {
    const value = this.inputRef.current.value;

    this.inputRef.current.value = '';
  }

  componentDidMount() {
    this.inputRef.current.focus();

  }

  render(){
    const { dictionary } = this.state;
    return(
      <div className="home">
        <div className="search">
          <input 
            className="searchInput"
            type="text"
            ref={this.inputRef}
            placeholder="Search"
          />
          <input 
            className="searchButton"
            type="submit"
            ref={this.searchRef}
            value="Search"
          />
        </div>
        <div className="dictionary">
          <ul>
            {dictionary.map(word => (
              <Card 
                description={word.description}
                terms={word.terms}
                deleteCard={this.deleteCard}
                id={word.id}
              />
            ))}
          </ul>  
        </div>
      </div>
    )
  }
}
