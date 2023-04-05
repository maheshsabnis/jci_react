import {useState} from 'react';

const StateComponent=()=>{
    /* Define State */
    const [firstName, setFname] = useState('');
    const [middleName, setMname] = useState('');
    const [lastName, setLname] = useState('');
    const [fullName, setFullName] = useState('');

    const save=()=>{
        setFullName(`${firstName} ${middleName} ${lastName}`);
    };
    const clear=()=>{
        setFullName('');
    };
    
    return(
        <div className="container">
            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control"
                  value={firstName} onChange={(evt)=>setFname(evt.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Middle Name</label>
                <input type="text" className="form-control"
                value={middleName}
                onChange={(evt)=>setMname(evt.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control"
                value={lastName}
                onChange={(evt)=>setLname(evt.target.value)}></input>
            </div>
            <div className="btn btn-group-lg">
                <button className="btn btn-warning" onClick={clear}>New</button>
                <button className="btn btn-success" onClick={save}>Save</button>
            </div>
            <div className="container">
                {fullName}
            </div>
        </div>
    );
};

export default StateComponent;