import React from 'react';
import ReactDom from 'react-dom';
import ReactComp from '../src/comp.js'

class Test extends React.Component{
    render(){
        return <div>
            ！！！
            <ReactComp />
        </div>
    }
}

ReactDom.render(<Test />, document.getElementById('root'))