  
import React from 'react';
import NumberBaseball from './Games_NumberBaseball';
import RSP from './Games_RSP';
import Lotto from './Games_Lotto';

const GameMatcher =({location, match, history}) =>{
    let urlSearchParams = new URLSearchParams(location.search.slice(1));
    console.log(urlSearchParams.get('hello'));
    if (match.params.name === 'number-baseball') {
      return <NumberBaseball />
    } else if (match.params.name === 'rock-scissors-paper') {
      return <RSP />
    } else if (match.params.name === 'lotto-generator') {
      return <Lotto />
    }
    return (
      <div>
        일치하는 게임 없음.
      </div>
    );
}

export default GameMatcher;