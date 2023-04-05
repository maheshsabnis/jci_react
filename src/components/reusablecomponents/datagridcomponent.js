import React from 'react'

export default function DataGridComponent() {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>P1</td>
            </tr>
            <tr>
                <td>102</td>
                <td>P2</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
