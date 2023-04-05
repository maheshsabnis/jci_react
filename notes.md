# React Object Model
- react
    - Base or foundation object model 
    - JavaScript XML Enhancements / XML Extensions
        - JSX
            - HTML Elements System developed by Facebook for React UI
        - Fragment
            - Default Container UI
        - Component class
            - Base class for All Components
            - Component<P,S>
                - P is 'props'
                    - Data Received from Parent Component
                - S is 'state'
                    - Data local to the Component
                - Lifecycle Methods
                    - Explict for Class Components
                    - Implicit or internally handled for Functional Components
            - Class Components 
                - ** not retired but no more frequently used
            - Functional Components
                - JavaScript Funcation Object                     
        - PureComponent 
            - Derived from Component base class but does not use or perform 'Component Update*****'

- react-dom
    - Mount the Component on 'Browser's UI Thread'
        - CustomElementRegistry

- @testing-library/jest-dom": "^5.16.5",
    - An integration with JEST Testing Env. Engine
- @testing-library/react": "^13.4.0",
    - Testiong Object Model for React
-  @testing-library/user-event": "^13.5.0", 
    - Testing Env. for Te
- react-scripts
    - React CLI i,e. create-react-app
        - Compile
        - debug
        - run
        - test         
# Programming with React
    - Creation of Components
        - Data Passing across Components
            - 'props'
                - Of the type 'defineProps' a mechansim of defining 'properties' 'dynamically (run time)' using 'spread (...props)' 
                    - properties
                        - value properies to share data across components
                        - Function, used to emit data from Chilt-to-parent 
                - props are 'immuatble'
                    - all properties will be live on UI thread for lifetime of React application        
        - Statefull components
            - Hooks
                - useState()
                    - Hook for defining the Component's Local state
                    - const [x,setX] = useState(0);
                        - x, is the state property for component
                            - default is 0
                        - setX is DispatchAction object of React that will update value of 'x' based on DOM Events
                    - Binding State with UI element
                        - <ELEMENT ATTRIBUTE={STATE-PROPERTY} EVENT={DISPATCH-ACTION-TO-UPDATE-STATE-PROPERTY}/>
                            -  ELEMENT: HTML element e.g. input
                            -  ATTRIBUTE: an attribute of HTML element that acepts the value
                            -  STATE-PROPERTY: Lcoal state property defined for the Component using 'useState'
                            -   EVEN: an event of HTML element that causes the value to change
                            - DISPATCH-ACTION-TO-UPDATE-STATE-PROPERTY: the Dispatch Action defined in 'useState' that will update the state property value
    - e.g.
```` javascript
    const [x,setX] = useState(0);

    return(
       <input type="text" value={x} onChange={(evt)=>setX(evt.target.value)}>
    );
````
    - ELEMENT: input, ATTRIBUTE: value, PROPERTY-NAME: x, EVENT:onchange, DISPATCH-ACTION-TO-UPDATE-STATE-PROPERTY: setX

                - useContext()
                - useEffect()
            - Reusability                      