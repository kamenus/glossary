import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar/';
import Home from './Home/';
import Header from './Header/';
import Manage from './Manage/';
 
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dictionary: [],
      searchValue: [],
      description: '',
      terms: [],
      termin: '',
    }
  }

  inputHandler = name => e => 
    this.setState({ [name]: e.target.value });

  terminHandler = () => {
    const { terms, termin } = this.state;

    let id = 0;

    terms[terms.length - 1]&&(id = terms[terms.length - 1].id + 1)

    terms.every( term => term.title != termin ) &&
      this.setState({ 
        terms: terms.concat( { id, title: termin } ),
      });

    this.setState({ termin: '' })
  }

  deleteTermin = id => {
    const { terms } = this.state;

    let termList = terms.filter(term => term.id != id);
    this.setState({ terms: termList })
  }

  addNewWord = () => {
    const { dictionary, terms, description } = this.state;
    
    let id = 0;
    (dictionary[dictionary.length - 1]) &&
      (id = dictionary[dictionary.length - 1].id + 1);

    let newDict = dictionary.concat({
      id,
      description,
      terms
    })
    console.log(newDict);
    this.setState({ dictionary: newDict , terms: [], description: '', termin: '' });
  }

  // getDictionary = () => {

  //   fetch('http://localhost:8080/api/glossary/groups', {method:'GET'})
  //     .then( response => response.json)
  //     .then( result => console.log(result) )
  // }

  componentDidMount() {
  }

  render() {
    const { 
      dictionary,
      searchValue,
      terms,
      description,
      termin,
    } = this.state;
    return (
      <div className="app">
        <Header />
        <Navbar />
        <section className="content">
          <Switch>
            <Route exact path="/" render={ () => (  
              <Home
                dictionary={dictionary}
                inputHandler={this.inputHandler}
                searchValue={searchValue}
              />
            )} />
            <Route path="/manage" render={() => (
              <Manage 
                inputHandler={this.inputHandler}
                terminHandler={this.terminHandler}
                description={description}
                terms={terms}
                termin={termin}
                deleteTermin={this.deleteTermin}
                addNewWord={this.addNewWord}
              />
            )}/>
          </Switch>
        </section>
      </div>
    );
  }
}
