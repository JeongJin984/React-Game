const React = require('react');
const {Component} = React;

class ResponseCheck extends React.Component{
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [],
    };
    timeout;
    startTime;
    endTime;
    onClickScreen = ()=>{
        const{state, message, result} = this.state;
        if(state === 'waiting'){
            this.setState({
                state:'ready',
                message: '초록색이 되면 클릭하세요.',
            });
            
            this.startTime = new Date();

            this.timeout = setTimeout(
            ()=>{
                this.setState({
                state: 'now',
                message: '지금 클릭',});
            }, Math.floor(Math.random()*1000)+2000);}
        else if(state === 'ready'){
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting',
                message: '너무 성급합니다. 초록색이 된 후 클릭하세요',
            })
        } 
        else if (state === 'now'){
            this.endTime = new Date();
            this.setState((prevState)=>{
               return { 
                   state: 'waiting',
                   message: '클릭해서 시작하세요',
                   result: [...prevState.result, this.endTime- this.startTime],
                };
            });
        }
    };
    onRest = () =>{
        this.setState({
            result: [],
        });
    };
    renderAverage = () =>{
        const {result}  = this.state;
        return (result.length === 0 
        ? null 
        :
        <> 
            <div>평균시간 : {this.state.result.reduce((a,c)=>a+c) / this.state.result.length}ms</div>
            <button onClick ={this.onRest}>리셋</button>
        </>
        );
    }
    render(){
        const {state, message} = this.state
        return(
            <>
                <div id = "screen" className = {state} onClick = {this.onClickScreen} >
                    {message}
                </div>
                {this.renderAverage()}
            </>
        );
    }
}

module.exports = ResponseCheck; 