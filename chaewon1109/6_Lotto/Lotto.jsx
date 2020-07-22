import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getNumbers');
    const candidate = Array(45).fill().map((v,i) => i+1);
    const shuffle = [];
    while(candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonussNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p-c);
    return [...winNumbers, bonussNumber];
}

const Lotto = () => {
    const[winBalls, setWinBalls] = useState([]);
    const lottoNumbers = useMemo(() => getWinNumbers(), [winBalls]);
    const[winNumbers, setWinNumbers] = useState(lottoNumbers);
    const[bonus, setBonus] = useState(null);
    const[redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        for(let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]])
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000)
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]);

    const runTimeouts = () => {
        for(let i = 0; i < winNumbers.length - 1; i++) {
            this.timeouts[i] = setTimeout((prevState) => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, winNumbers[i]],
                    };
                })
            }, (i + 1) * 1000);
        }
        this.timeouts[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000)
    };

    const onClickRedo = useCallback(() => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number = {bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
};

export default Lotto;