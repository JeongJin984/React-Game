import React, { useState, useReducer, useCallback, useEffect} from 'react';
import Table from './Table'

const initialState ={
    winner:'',
    turn: 'O',
    tableData: [['','',''],['','',''],['','','' ]],
    recentCell: [-1,-1],
}

export const SET_WINNER = 'SET_WINNER'
export const CLICK_CELL = 'CLICK_CELL'
export const CHANCH_TURN = 'CHANCH_TURN'
export const RESET ='RESET'

const reducer = (state, action) =>{
    switch(action.type){
        case SET_WINNER :{
            return{
                ...state,
                winner: action.winner,
            }
        }
            case CLICK_CELL:{
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]]; //immer 알아보기
            tableData[action.row][action.cell] = state.turn;
            //... 객체 얕은 복사
            //console.log(tableData);
            return{
                ...state,
                tableData,
                recentCell: [action.row, action.cell],
            };
        }
        case CHANCH_TURN:{
            return{
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O', 
            };
        }
        case RESET:{
            return{
                ...state,
                winner: '',
                turn: 'O',
                tableData: [['','',''],['','',''],['','','' ]],
                recentCell: [-1,-1],
            };
        }
    }
};



const Tictactoe = () =>{
    const[state, dispatch] = useReducer(reducer, initialState);
    const {tableData, turn, recentCell} = state;
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('');
    // const [tableData, setTableData] = useState([['','',''],['','',''],['','','' ]]);
    
    const onClickTable = useCallback( ()=>{
        dispatch({type: SET_WINNER , winner: 'O'});
    },[]);

    useEffect(()=>{
        let win = false;
        const [row,cell] = recentCell;
        if(row<0){
            return;
        }
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
        win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
        win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
        win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
        win = true;
        }
        if(win){
            dispatch({ type: RESET });
            dispatch({type:SET_WINNER, winner: turn});
        }
        else{
            let all = true;
            tableData.forEach((row)=> { //무승부검사
                row.forEach((cell)=>{
                    if(!cell){
                        all = false;
                    }
                });
            });
            if(all){
                console.log('무승부');
                dispatch({type:RESET});
            }
            else{
                dispatch({type:CHANCH_TURN});
            }
        }
        console.log(win, row, cell, tableData, turn);
    },[recentCell]);

    return (
        <>
            <Table onClick = {onClickTable} tableData = {state.tableData} dispatch = {dispatch}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )
}






export default Tictactoe;