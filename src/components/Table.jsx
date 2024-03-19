import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import Data from './MOCK_DATA.json'

export default function Table() {
    const columns = [
        {
            Header: "id",
            accessor: "id"
        },
        {
            Header: "name",
            accessor: "name"
        },
        {
            Header:"email",
            accessor: "email"
        },
        {
            Header: "gender",
            accessor: "gender"
        },
        {
            Header:"country",
            accessor: "country"
        },
        {
            Header: "age",
            accessor: "age"
        },
    ]
    
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        columns: useMemo(()=>columns, []),
        data: useMemo(()=>Data, []) 
    })

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                <td><button onClick={()=>alert(row.original.id)}>hey</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
