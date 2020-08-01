import React, {useState, useRef, useEffect} from 'react'

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
}

const scores = {
    가위: 1,
    바위: 0,
    보: -1
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
        return v[1] === imgCoord
    })[0]
}

const RSP = () => {
    const [score, setScore] =useState(0)
    const [result, setResult]=useState('')
    const [imgCoord, setImgCoord]=useState(rspCoords.바위)
    const interval = useRef()
    const overload = useRef(false) 
    
    useEffect(()=> {
        console.log('useEffect setting')
        interval.current = setInterval(changeHand, 100)
        return () => {
            console.log('useEffect clear')
            clearInterval(interval.current)
        }
    }, [imgCoord])

    const changeHand =() =>{
        if(imgCoord === rspCoords.바위){
            setImgCoord(rspCoords.가위)
        }else if(imgCoord === rspCoords.가위){
            setImgCoord(rspCoords.보)
        }else{
            setImgCoord(rspCoords.바위)
        }
    }

    const onClickBtn = (choice) => ()=> {
        clearInterval(interval.current)
        console.log('Btn Clear')

        const myScore = scores[choice]
        const cpuScore = scores[computerChoice(imgCoord)]
        const diff = myScore - cpuScore

        if(overload.current===false)
        {
            overload.current=true
            if(diff===0){
                setResult('비김')
            }else if ([-1, 2].includes(diff)){
                setResult('이김')
                setScore((preScore)=>preScore+1)
            }else {
                setResult('짐')
                setScore((preScore)=>preScore-1)
            }

            setTimeout(()=> {
                overload.current = false
                clearTimeout(interval.current)
                console.log('setTime Clear')
                interval.current = setInterval(changeHand, 100)
                console.log('setTime setting')
            }, 1000)
        }
    }

    return(
        <>
            <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>score: {score}</div>
        </>
    )
}

export default RSP;