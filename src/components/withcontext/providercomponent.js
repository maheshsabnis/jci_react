import { useState } from "react";

import { DataContext } from "../datacontext";
import ConsumerComponent from "./consumercomponent";
import SelectContextComponent from "../reusablecomponents/selectcontextcomonent";
import SelectContextEventComponent from "../reusablecomponents/selectcontexteventcomonent";

const ProviderComponent=()=>{
    const [message, setMessage] = useState('');
    const [name,setName]=useState('');
    const names = ['Tejas', 'Mahesh', 'Ramesh', 'Ram','Sabnis'];
    const heros = ['Sean Connary', 'Pierce Brosnon', 'Daniel Craig'];
    const [hero, setHero] = useState('');
    const click=()=>{
        setMessage(message.toUpperCase());      
    } 
    return (
        <div className="container">
            Send Message: <br/>
            <input type="text" value={message}
              onChange={(evt)=>setMessage(evt.target.value)}
            />
            <br/>
            <button onClick={click}>Send Message</button>
            <hr/>
            <DataContext.Provider value={message}>
                <ConsumerComponent></ConsumerComponent>
            </DataContext.Provider>
            <hr/>
            <DataContext.Provider value={{names,setName}}>
               <SelectContextComponent></SelectContextComponent>
            </DataContext.Provider>
            <hr/>
            <div>
                <strong>
                    Value Received : {name}
                </strong>
            </div>
            <hr/>
            <DataContext.Provider value={{names,setName}}>
               <SelectContextEventComponent></SelectContextEventComponent>
            </DataContext.Provider>
            <hr/>
            <div>
                <strong>
                    Value Received : {name}
                </strong>
            </div>

            <hr/>

            <DataContext.Provider value={{heros,setHero}}>
               <SelectContextEventComponent></SelectContextEventComponent>
            </DataContext.Provider>
            <hr/>
            <div>
                <strong>
                    Value Received for Hero : {hero}
                </strong>
            </div>
        </div>
    );
};

export default ProviderComponent;