import React from 'react';
import ReactDom from 'react-dom';
import ReactComp from 'reactcomp2'

class Test extends React.Component{
    render(){
        return <div>！！！
            <ReactComp />
        </div>
    }
}

ReactDom.render(<Test />, document.getElementById('root'))