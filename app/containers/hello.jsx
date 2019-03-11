import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import A from "../component/A";
import B from "../component/B";
import C from "../component/C";
import * as userinfoActions from '../actions/userinfoAction'


class Hello extends React.Component{

    render() {
        return (
            <div>
                <p>hello</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C userinfo={this.props.userinfoActions}/>
            </div>
        )
    }
    //组件加载完成调用
    componentDidMount() {
        this.props.userinfoActions.login({
            userid:'abc',
            city:'beijing'
        })
    }
}


function mapStateToProps(state) {
    return{
        userinfo:state.userinfo//这里获取的是定义规则处的userinfo返回的值
    }
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Hello)