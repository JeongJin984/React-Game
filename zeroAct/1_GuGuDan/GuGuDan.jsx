import React from 'react'
import  { useState, useRef } from 'react';

const GuGuDan = () => {
    const [first, setFirst]     = useState(Math.ceil(Math.random()*9));
    const [second, setSecond]   = useState(Math.ceil(Math.random()*9));
    const [value, setValue]     = useState('');
    const [result, setResult]   = useState('');
    const inputRef              = useRef(null);

    const onSubmitForm=(e)=>{
        e.preventDefault();
        if(parseInt(value)===first*second){
            setResult('정답: '+value);
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));

            setValue('');
            inputRef.current.focus();
        }
        else{
            setResult('땡!');
            
            setValue('');
            inputRef.current.focus();
        }
    };

    return (
        <React.Fragment>
            <div>{first} * {second}</div>
                <form onSubmit={onSubmitForm}>
                    <input 
                        ref={inputRef} 
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <input type="submit" value="=" />
                </form>
            <div id="result">{result}</div>
        </React.Fragment>
    );           
};

export default GuGuDan;