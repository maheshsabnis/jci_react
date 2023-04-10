// The Context Object that will maintain the data-schema
// which will be passed from parent component to 
// specific child component 

// createContext: A function that will be used to
// define a global context object which can be used
// by multiple components across the react app
// to Provide and Consume data

import { createContext } from "react";

// Lets define a context object

export const DataContext = createContext(null);
// The null is default value stored in context
// React.Context: is a type that has following two objects
// 1. Provider: Used by parent to pass data to specific child using the 
    // following syntax
        // <DataContext.Provider value={}>
            //<ChildComponent></ChildComponent>
        //</DataContext.Provider>  
        // The 'value' is a schema of the data that is passed to child
        // value can be a object or a complex object having function in it 
// 2. Consumer:
    // The ChildComponent Consumes data from context which is provided by parent component
    // The Child Component MUST use 'useContext' to subscribe to the DataContext and read data from it
    // In child component the subscription to DataContext will be as follows
        // let dataFromContext = useContext(DataContext)

