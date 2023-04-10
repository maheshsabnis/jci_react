import React, {useContext} from 'react'
import { DataContext } from '../datacontext'
const ConsumerComponent = () => {

    // Subscribe to the DataContext to Consume data from it
    const receivedMessage = useContext(DataContext);

  return (
    <div className='container'>
        <h2>The Comsumer Component</h2>
        <strong>
            The Received Message: {receivedMessage}
        </strong>
    </div>
  )
}

export default ConsumerComponent
