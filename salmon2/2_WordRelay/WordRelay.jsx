const React=require('react');
const {useState, useRef} = React;

const WordRelay = () => {
    const [word, setWord] = React.useState('연어');
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(value);

    const onSubmitForm= (e)=> {
        e.preventDefault();
        
        if(word[word.length -1] === value[0])
        {
            setWord(value);
            setValue('');
            setResult("딩동댕");
        }else
        {
            setValue('');
            setResult("땡");
        }
    }

    const onChangeInput = (e) =>{
        setValue(e.target.value);
    }

    return (
        <div>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>input</button>
            </form>
            <div>{result}</div>
        </div>
    );
}

module.exports = WordRelay;