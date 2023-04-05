const SelectComponent=(props)=>{
    if(props.dataSource !== undefined ) {
        return (
            <div className="container">
               <select className="form-control">
                {
                    props.dataSource.map((rec,idx)=>(
                        <option key={idx} value={rec}>{rec}</option>
                    ))
                }
               </select> 
            </div>
        );
    }

    return(
        <div className="alert alert-danger">
              No Data  
        </div>
    );

    
};

export default SelectComponent;