import {useState} from 'react';
import ChildComponent from './childcomponent';
const ParentComponent=()=>{
    const [value,setValue] = useState('');
    const [name,setName] = useState('');
    const [rev, setRev] = useState('');

    const sendToChild = ()=>{
        setName(value.toUpperCase());
    };
    const reverseValueFromChild=(revVal)=>{
        setRev(revVal);
    };

    return(
        <div>
            <input type='text'
              value={value}
              onChange={(evt)=>setValue(evt.target.value)}
            />
            <button
              onClick={sendToChild}
            >Send Value To Child</button>
            <hr/>
            <div>
                <strong>
                    Received reversed value from Child: {rev}
                </strong>
            </div>
            <hr/>
            {/* The Parent is subscribing
             to emitReverse props type function
             using reverseValueFromChild
             to receive value from child
            */}
            <ChildComponent val={name}
             emitReverse={reverseValueFromChild}
            ></ChildComponent>

        </div>
    );

};

export default ParentComponent;