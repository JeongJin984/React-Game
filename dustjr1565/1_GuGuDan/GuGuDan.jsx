const React=require('react');
const {useState, useRef} = React;

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random()*9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
                    if(parseInt(value) === first * second){
                        setResult(first +'*'+ second + '=' + value + '(O)');
                        setFirst(Math.ceil(Math.random()*9));
                        setSecond(Math.ceil(Math.random()*9));
                        setValue('');
                        inputRef.current.focus();
                    } else{
                        setResult(first +'*'+ second + '=' + value + '(X)');
                        setValue('');
                        inputRef.current.focus();
                    }
    };

    return (
            <>
                <div>{first}*{second}=?</div>
                <form onSubmit={onSubmitForm}>
                    <input ref={inputRef} value={value} onChange={onChangeInput}/>
                    <button>input</button>
                </form>
                <div>{result}</div>
            </>
        );
};

module.exports = GuGuDan;