import React, {useEffect, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated)
    useEffect(() => {
        console.log('[Cockpit] useEffect');
        
        const timer = setTimeout(()=>{
            // alert("saved data to cloud");
        },1000);
        return () => {
            console.log("cockput cleanup")
            //clearTimeout(timer);
        }
    } , []);

    useEffect(() => {
        console.log("2nd usereffect");
        return () => {
            console.log("2nd cleanup");
        }
    })

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    // ['red','bold'].join(' ');
    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1 ){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>
            I am react app
            </h1>
            <p className={assignedClasses.join(' ')}>
                This is working!
            </p>
            <button 
                className={btnClass}    
                onClick={props.clicked}>
                    Toggle Persons
            </button>
            {/* <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */}
                <button onClick={authContext.login}>Log in</button>
        </div> 
    );
};

export default React.memo(Cockpit);

