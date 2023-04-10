import React, {useContext} from 'react';
import { DataContext } from './../datacontext';

const SelectContextComponent=()=>{

    // CReate a Subscription for the data
    // that will be received from the 'provider'
    // component
    
    //let dataSource = useContext(DataContext);
    let {names, setName}= useContext(DataContext);

    console.log('====================================');
    console.log(JSON.stringify(names));
    console.log('====================================');

    if(names === undefined || names.length === 0){
        return (
            <div>
                <span>
                    <strong>No Data Available</strong>
                </span>
            </div>
        );
    } else {
        return(
            <div>
                <select onChange={(evt)=>setName(evt.target.value)}>
                    {
                        names.map((e,i)=>(
                            <option key={i} value={e}>{e}</option>
                        ))
                    }
                </select>
            </div>
        );
    }
};

export default SelectContextComponent;