import { Fragment } from 'react'; 
import './App.css';
/* The React Component */
/* The 'props' will be used to read data received from parent component */
function App(props) {
  return (
    <div className="container">
       <h4>My React App</h4>
       <div className='container'>
        <strong>
           {props.message}
           <br/>
           {props.newmsg}
        </strong>
       </div>
       <hr/>
       <FirstChildComponent name={'Mahesh'}></FirstChildComponent>
    </div>
  );
}

/* Define a component */

const FirstChildComponent=(props)=>{
  return (
    <Fragment>
       <h5>The First Child Component</h5>
       <div className='alert alert-danger'>
         {props.name}
       </div>
    </Fragment>
  );
};

/* The ES 6 Module export 'App' function so that it can be imported */
export default App;
