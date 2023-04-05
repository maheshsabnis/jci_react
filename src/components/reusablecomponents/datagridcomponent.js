import React from 'react'

export default function DataGridComponent(props) {
  let headers = Object.keys(props.dataSource[0]);  
  return (
    <div>
      <table>
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
                <tr key={idx}>
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
