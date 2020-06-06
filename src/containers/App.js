import React, { Component } from 'react';
// import './App.module.css';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit';
// import Auxillary from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';


// import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';

//
// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   font: inherit;
//   color:white;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor:pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
//     color:black;
//   }
// `;

class App extends Component {

  constructor(props){
    super(props);
    console.log("app.js constructor");
    this.state = {
      persons: [
        {id:'asf', name: "Max", age: 28},
        {id:'sgsd', name:"Manu", age: 29},
        {id:'oh',name:"Steffi", age: 32},
      ],
      showPersons: false,
      showCockpit:true,
      changeCounter: 0,
      authenticated: false
    }
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log('app.js getDerivedStatefromProps called');
  //   return state;
  // }

  // componentDidMount(){
  //   console.log("[App.js] componentdidmount");
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] ShouldComponentUpdate");
    return true;
  }

  nameChangedHandler = (event, id) => {
    console.log(event.target.value);
    const personIndex =  this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    let newPersons = [...this.state.persons]
    newPersons[personIndex] = person
    this.setState((prevState, props) => {
      return {
        persons:newPersons,
      changeCounter: prevState.changeCounter + 1
      }
    })    
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons]
    newPersons.splice(personIndex,1);
    this.setState({persons:newPersons});
  }

  loginHandler = () =>  {
    this.setState({authenticated: true})
  }

  render(){

    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   color:'white',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor:'pointer'
    // }
    console.log('app.js render');
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons){
      persons = (
        <div >
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler}>
          </Persons>
      </div>
      );
      //style.backgroundColor = 'red';
      btnClass= classes.Red;
    }

    

    return(
      // <StyleRoot>
      // <WithClass classes={classes.App}>
      // <Auxillary>

       <div className={classes.App}> 
        <button
          onClick={()=>{this.setState({showCockpit:false})}}>Remove cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated, 
          login: this.loginHandler
        }}>
        {this.state.showCockpit ? <Cockpit 
          personsLength={this.state.persons.length} 
          showPersons={this.state.showPersons} 
          clicked={this.togglePersonsHandler}         
          /> : null }
        {persons}
        </AuthContext.Provider>
      </div> 
      /* </Auxillary> */
      /* </WithClass> */
    // </StyleRoot>
    )
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'I am react app!!'));
  }
}

export default App;