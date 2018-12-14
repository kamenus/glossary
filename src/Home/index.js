import React, { Component } from 'react';
import './index.css';
import Card from './Card/'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dictionary: this.props.dictionary,
      visibleDict: [],
      isOnDelete: false,
      idOnDelete: null,
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

  }

  deleteManager = id => {
    const { isOnDelete } = this.state;
    this.setState({ isOnDelete: !isOnDelete });
    (id !=undefined) &&
      this.setState({ idOnDelete:id })
  }

  clearSearch = () => {
    this.inputRef.current.value='';
    this.searchOnClick();
  }

  componentDidMount() {
    const { dictionary } = this.state;
    this.setState({ visibleDict: dictionary });
    this.inputRef.current.focus();
  }

  render(){
    const { 
      visibleDict, 
      isOnDelete,
      idOnDelete
    } = this.state;
    return(
      <div className="home">
        <div className="search">
          <input 
            className="searchInput"
            type="text"
            ref={this.inputRef}
            placeholder="Search"
            onChange={this.searchOnClick}
          />
          <input 
            className="searchButton"
            type="submit"
            ref={this.searchRef}
            value="Clear"
            onClick={this.clearSearch}
          />
        </div>
        <div className="dictionary">
          <ul> 
            {visibleDict.map(word => (
              <Card 
                key={word.id}
                idOnDelete={idOnDelete}
                description={word.description}
                terms={word.terms}
                deleteCard={this.deleteCard}
                cardChanger={this.cardChanger}
                id={word.id}
                isOnDelete={isOnDelete}
                deleteManager={this.deleteManager}
              />
            ))}
          </ul>  
        </div>
      </div>
    )
  }
}
