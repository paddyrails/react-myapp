
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons){
    //       return true;
    //     }else {
    //       return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snaptshot!'};;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
      console.log('[Persons.js] ComponentDidUpdate');
      console.log(snapshot)
    }

    componentWillUnmount(){
      console.log('[Persons.js] ComponentWillUnmount');
    }

    render(){
      return this.props.persons.map((person,index)=>{
        return <Person 
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      })
    }  
};

export default Persons;