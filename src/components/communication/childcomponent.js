import { useState } from "react";

 

const ChildComponent=(props)=>{
    const [reverse,makeReverse] = useState('');

    const reverseMe=()=>{
        let result = '';
        for(let i = props.val.length-1;i>=0;i--){
            result+= props.val[i];
        } 
        makeReverse(result);
        // a function in child that will
        // be executed on Button Click    
        props.emitReverse(result);
    };

    return(
        <div>
            <strong>
                Value Received from Parent : {props.val}
            </strong>
            <hr/>
            <button onClick={reverseMe}>Emit Reverse To Parent</button>
            <hr/>
            <div>
                Reverse : {reverse}
            </div>
        </div>
    );
};

export default ChildComponent;