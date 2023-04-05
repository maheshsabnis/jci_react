import {useState} from 'react';
import SelectComponent from '../reusablecomponents/selectcomponent';
import DataGridComponent from '../reusablecomponents/datagridcomponent';

const StateComponent=()=>{
    /* Define State */
    const [firstName, setFname] = useState('');
    const [middleName, setMname] = useState('');
    const [lastName, setLname] = useState('');
    const [fullName, setFullName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [education, setEducation] = useState('');

    // const occupations = ['Service', 'Self-Service', 'Business', 'Freelancer', 'Designer'];

    const occupations = undefined;
    

    const degrees = ['B.E.', 'B.Tech', 'B.Sc.', 'M.Sc'];


    const products = [
        {id:101,name:'P1', catname:'c1'},
        {id:102,name:'P2', catname:'c2'},
        {id:103,name:'P3', catname:'c3'}
    ];

    const emps = [
        {eno:1,ename:'A'},
        {eno:2,ename:'B'},
    ];


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
            
            {/* <div className='container'>
                 <label>Select Occupation</label>
                 <select className='form-control' value={occupation}
                  onChange={(evt)=>setOccupation(evt.target.value)}>
                    {
                        occupations.map((o,i)=>(
                            <option key={i} value={o}>{o}</option>
                        ))
                    }
                 </select>
            </div>
            <div className='container'>
                 <label>Select Education</label>
                 <select className='form-control' value={education}
                  onChange={(evt)=>setEducation(evt.target.value)}>
                 {
                        degrees.map((d,i)=>(
                            <option key={i} value={d}>{d}</option>
                        ))
                    }
                 </select>
            </div> */}
            <div className="btn btn-group-lg">
                <button className="btn btn-warning" onClick={clear}>New</button>
                <button className="btn btn-success" onClick={save}>Save</button>
            </div>
            <div className="container">
                {fullName}
                <br/>
                Occupation: {occupation} && Degree: {education}
            </div>
            <hr/>
            <h5>Using Re-Usable SelectComponent</h5>
            <div>
            Select Occupations: 
                <SelectComponent dataSource={occupations}></SelectComponent> 
             
                <hr/>
                Select Degree:
                <SelectComponent dataSource={degrees}></SelectComponent>
            </div>
            <hr/>
            <DataGridComponent dataSource={products} CanDelete={true}></DataGridComponent>
            <hr/>
            <DataGridComponent dataSource={emps}></DataGridComponent>
        </div>
    );
};

export default StateComponent;