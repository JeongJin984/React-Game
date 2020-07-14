const React=require('react');
const { default: Try } = require('./NumberBaseball_Try');
const {useState, useRef} = React;

function getNumbers(){
    const candidate=[1,2,3,4,5,6,7,8,9];
    const array=[];
    for(let i=0; i<3; i +=1){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)), 1)[0]
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [answer, setAnswer] = React.useState(getNumbers());
    const [result, setResult] = React.useState('');
    const [value, setValue] = React.useState('');
    const [tries,setTries] =React.useState([]);
    const inputRef=React.useRef(null);

    const onSubmitForm = (e) =>
    {
        e.preventDefault();

        if(value===answer.join(''))
        {
            setResult('홈런');
            setTries((preTries)=>{
                return [...preTries, {try: value, result:'홈런'}]
            });
        }else{
            const answerArray = value.split('').map((v)=>parseInt(v));
            let strike=0;
            let ball =0;
            if(tries.length >=9){
                setResult(`답은: ${answer.join(',')} 였습니다.`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            }else {
                for(let i=0; i<3; i+=1){
                    if(answerArray[i]===answer[i]){
                        strike+=1;
                    }else if (answer.includes(answerArray[i])){
                        ball+=1
                    }
                }
                setTries((preTries)=>[...preTries, {try:value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}]);
                setValue('');
            }
        }
        inputRef.current.focus();
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={3} ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력</button>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={`${i+1}차 시도: `} tryInfo={v} />
                    )
                })}
            </ul>
        </>
    )
}

module.exports = NumberBaseball;