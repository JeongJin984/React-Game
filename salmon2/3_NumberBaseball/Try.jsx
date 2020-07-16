import React, {memo,useState} from 'react';
//{Component} from 

const Try = memo(({tryInfo}) => { 
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>       
        </li>
        );
});

// class Try extends Component{
// render(){
//     return(
//         <li>
//             <div>{this.props.tryInfo.try}</div>
//             <div>{this.props.tryInfo.result}</div>       
//         </li>
//         );
//     }
// }

export default Try;