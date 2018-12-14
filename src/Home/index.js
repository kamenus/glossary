import React, { Component } from 'react';
import './index.css';
import Card from './Card/'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dictionary: this.props.dictionary,
      visibleDict: []
    }

    this.cardChanger = this.props.cardChanger;
    this.deleteCard = this.props.deleteCard;

    this.searchRef = React.createRef();
    this.inputRef = React.createRef();
  }

  searchOnClick = () => {
    const { dictionary } = this.state;
    const value = this.inputRef.current.value;
    if(value){
      let visibleDict = []; 
      dictionary.map((word) => {
        if(word.description.includes(value)){
          visibleDict.push(word)
        }else{
          let terms = word.terms;
          for(let term of terms){
            if(!visibleDict.includes(word)){
              term.title.includes(value) && 
                visibleDict.push(word)
            }    
          };
          this.setState({ visibleDict });
        }
      })
    }else this.setState({ visibleDict:dictionary });

    this.inputRef.current.value = '';
  }

  componentDidMount() {
    const { dictionary } = this.state;
    this.setState({ visibleDict: dictionary });
    this.inputRef.current.focus();
  }

  render(){
    const { visibleDict } = this.state;
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
            onClick={this.searchOnClick}
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
