import React from 'react'
import  { useState, useRef } from 'react';

const WordRelay = () => {
    const [word, setWord] = useState('시작');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (word[word.length-1] == value[0]) {
            setResult("정답입니다.");
            setWord(value);
            setValue('');
        }
        else {
            setResult("땡");
            setValue('');
        }
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            {word}
            <form onSubmit={onSubmitForm}>
                <input onChange={onChange} value={value}></input>
                <button>입력</button>
            </form>
            {result}
        </>
    );           
};

export default WordRelay;