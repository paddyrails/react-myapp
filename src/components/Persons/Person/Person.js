import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import './Person.css';
import styled from 'styled-components';
// import Auxillary from '../../../hoc/Auxillary';
import AuthContext from '../../../context/auth-context';
// import Radium from 'radium';

const StyledDiv = styled.div`    
        width:60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px){
            width: 450px
        }
    `;

class Person extends Component {
    //inputElementRef = null;
    constructor(props){
        super(props);
       this.inputElementRef = React.createRef();
    }  

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        return (
            // <div className="Person" style={style}>
            // <StyledDiv>
            // </StyledDiv>
            <Fragment>   
                {/* <AuthContext.Consumer>
                    {context => 
                        context.authenticated ? <p>Authenticated</p> : <p>Please login</p>          
                    }
                </AuthContext.Consumer>          */}
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p>}
                <p onClick={this.props.click}>
                    My name is {this.props.name} I/m a Person of age {this.props.age} years.
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}/>               
            </Fragment>
            )
    }
     
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func
};

export default Person;


    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }

    // let rnd = Math.random()
    // if(rnd > 0.7){
    //     throw new Error('Something went wrong');
        
    // }