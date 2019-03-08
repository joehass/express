import * as React from "react";
import Route from "react-router/es/Route";
import Router from "react-router/es/Router";
import IndexRoute from "react-router/es/Router";

class  RouteMap extends React.Component{

    updateHandle(){
        console.log('每次router变化之后都会触发')
    }
    render() {
        return ({
            <Router history={this.prop.history}>
                <Route path='/' component={APP}>
                    <IndexRoute component={Home}/>
                    <Route path='list' component={}/>
                    <Route path='detail/:id' component={Detail}/>
                </Route>
            </Router>
        })
    }
}