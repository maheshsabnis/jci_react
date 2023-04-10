const SelectComponent=(props)=>{

    const emitSelectedValue=(e)=>{
        //alert(`Selected Value in Child : ${e.target.value}`);

        props.selectedValue(e.target.value);
    }


    if(props.dataSource !== undefined ) {
        return (
            <div className="container">
               <select className="form-control" 
                value={props.bindableProperty}
               onChange={emitSelectedValue}>
                <option>Select Value</option>
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