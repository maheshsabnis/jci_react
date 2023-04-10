import React from 'react'

export default function DataGridComponent(props) {
  let headers;
  const rowClick=(row)=>{
   // alert(`Selected Row = ${JSON.stringify(row)}`);
   // Pass the Selected row value from Table to
   // the selectedRow props type based on
   // onClick event
   props.selectedRow(row);
  };
  if(props.dataSource === undefined || props.dataSource.length === 0)
    return <>No Data</>
  else {
    headers = Object.keys(props.dataSource[0]);   
     return (
    <div>
      <h3>I am a DataGrid Chomponent I am Child</h3>
      <table className='table table-bordered table-striped'>
        <thead>
            <tr>
               {
                 headers.map((h,i)=>(
                    <th>{h}</th>
                 ))
                }
            </tr>
        </thead>
        <tbody>
           {
             props.dataSource.map((rec,idx)=>(
                <tr key={idx} onClick={()=>rowClick(rec)}>
                    {
                        headers.map((h,i)=>(
                            <td key={i}>{rec[h]}</td>
                         ))
                    }
                </tr>
             ))
           }
        </tbody>
      </table>
    </div>
  )
          }
}
