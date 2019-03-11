import * as React from "react";
import { Window, TitleBar,TextInput,Label} from 'react-desktop/windows';
import './static/login.less';


export class Login extends React.Component{
    render() {
        return (
            <Window
                chrome
                height="564px"
                width="377px"
            >
                <TitleBar title="emessage" controls/>
                <Label id="pdLabel">密码登陆</Label>
                <TextInput
                    id="hrm"
                    ref="input"
                />
            </Window>
        )
    }
}