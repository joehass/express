import * as React from "react";
import Route from "react-router/es/Route";
import IndexRoute from "react-router/es/Router";
import NotFound from "../component/NotFound";
import App from "../App";
import Home from "../component/Home";
import List from "../component/List";
import Detail from "../component/Detail";
import Redirect from "react-router/es/Redirect";

class RouteMap extends React.Component{

    updateHandle(){
        console.log('每次router变化之后都会触发')
    }
    // render() {
    //     return (
    //         <HashRouter>
    //             <Route path='/' component={App}>
    //                 /**
    //                 * indexRoute:默认界面
    //                 */
    //                 <IndexRoute component={Home}/>
    //                 {/*
    //                 * onEnter:页面进入时调用
    //                 * onLeave:页面离开时调用
    //                 */}
    //                 <Route path='list' component={List} onEnter = {} onLeaver = {}/>
    //                 <Route path='detail/:id' component={Detail}/>
    //                 {/*重跳转界面*/}
    //                 <Redirect from="*" to={NotFound} />
    //             </Route>
    //         </HashRouter>
    //     )
    // }
}

export default RouteMap