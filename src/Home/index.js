import React, { Component } from 'react';
import './index.css';
import Card from './Card/'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visibleDict: this.props.dictionary,
    }

    this.cardChanger = this.props.cardChanger;
    this.deleteCard = this.props.deleteCard;

    this.searchRef = React.createRef();
    this.inputRef = React.createRef();
  }

  searchOnClick = () => {
    const { visibleDict } = this.state;
    const value = this.inputRef.current.value;


    this.inputRef.current.value = '';
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render(){
    const { dictionary, visibleDict } = this.state;
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
          <ul> {visibleDict.map( word => console.log(word) )}
            {visibleDict.map(word => (
              <Card 
                description={word.description}
                terms={word.terms}
                deleteCard={this.deleteCard}
                cardChanger={this.cardChanger}
                id={word.id}
              />
            ))}
          </ul>  
        </div>
      </div>
    )
  }
}
