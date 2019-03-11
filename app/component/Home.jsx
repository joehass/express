import * as React from "react";

class Home extends React.Component{

    render() {

        return (
            <div>
                home
                {/*页面跳转*/}
                <link to="/list"> to list</link>
            </div>
        )
    }
}

export default Home