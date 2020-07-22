import React, {useRef, useEffect, memo, useCallback } from 'react';
import {CLICK_CELL} from './Tictactoc_hooks'


const Td = memo(({rowIndex, cellIndex, dispatch, cellData}) =>{
    console.log('td render');

    const ref = useRef([]);
    useEffect(() => {
      console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
      console.log(cellData, ref.current[3]);
      ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellData]);



    const onClickTd = useCallback(()=>{
        console.log(rowIndex, cellIndex);
        if(cellData){
            return;
        }
        dispatch({type:CLICK_CELL, row: rowIndex, cell: cellIndex});
    },[cellData]);
    //비동기 이벤트 useEffect사용 turn 확인 등
    
    return (
    <td onClick ={onClickTd}>{cellData}</td>
    )
});



export default Td;