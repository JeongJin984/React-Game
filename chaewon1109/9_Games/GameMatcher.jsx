import React, { Component } from 'react';
import NumberBaseball from './3_NumberBaseball/NumberBaseball'
import RSP from './5_RSP/RSP'
import Lotto from './6_Lotto/Lotto'

class GameMatcher extends Component {
    render() {
        if (this.props.match.params.name === 'number-baseball') {
            return <NumberBaseball />
        }
        else if (this.props.match.params.name === 'rock-scissors-paper') {
            return <RSP />
        }
        else if (this.props.match.params.name === 'Lotto') {
            return <Lotto />
        }
        return (
            <div>
                일치하는 게임이 없습니다.
            </div>
        );
    }
}

export default GameMatcher;