import React, {memo } from 'react';
import Tr from './Tr';

const Table = memo(({onClick, tableData, dispatch}) =>{
    return (
        <table >
            <tbody>
                {Array(tableData.length).fill().map((tr, i)=>(<Tr dispatch = {dispatch} rowData = {tableData[i]} rowIndex = {i}    />))}
            </tbody>
        </table>
    )
});


export default Table;