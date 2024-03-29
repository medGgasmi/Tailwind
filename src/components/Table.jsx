import React, { useMemo, useState } from 'react';
import { useTable, useFilters, useSortBy } from 'react-table';
import Data from './MOCK_DATA.json';

export default function Table() {
    const columns = useMemo(() => [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Name",
            accessor: "name",
            filter: 'includes', // Or 'exact' for exact matches
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Gender",
            accessor: "gender",
        },
        {
            Header: "Country",
            accessor: "country",
        },
        {
            Header: "Age",
            accessor: "age",
        },
    ], []);
    
    // Filter the data based on the filterInput
    const [filterInput, setFilterInput] = useState('');
    const filteredData = useMemo(() => {
        if (!filterInput) return Data;
        return Data.filter(row => row.name.toLowerCase().includes(filterInput.toLowerCase()));
    }, [Data, filterInput]);

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilterInput(value);
    };


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data: filteredData,
    },
    useSortBy
    );
    


    return (
        <div> 
            <div className=' flex flex-col'>
                <label className=' text-left'>
                    search for a product
                </label>
                <input
                    type="text"
                    value={filterInput}
                    onChange={handleFilterChange}
                    className=' border-black outline-double w-64' 
                   
                />
                <label>
                    this is going to be theme switcher
                </label>
                <label>
                    <input type="checkbox"/>
                </label>
            
            </div>




            <table {...getTableProps()} className='bg-tahiti w-full shadow-2xl' style={{borderCollapse:'collapse', minWidth:'1000px'}}>
                <thead className='bg-silver'>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ' 🔼'}
                  </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
