import React, {useContext} from 'react';
import { DataContext } from '../datacontext';

const SelectContextEventComponent=()=>{

    // CReate a Subscription for the data
    // that will be received from the 'provider'
    // component
    
    //let dataSource = useContext(DataContext);
    let consumer= useContext(DataContext);
    console.log(`${JSON.stringify(consumer)}`);

    const names = consumer[Object.keys(consumer)[0]];
    console.log(names);

    const event = consumer[Object.keys(consumer)[1]];
    
    

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
                <select onChange={(evt)=>event(evt.target.value)}>
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

export default SelectContextEventComponent;