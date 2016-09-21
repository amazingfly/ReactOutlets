import * as React from "react";
import * as ReactDOM from "react-dom";
import {Button} from './Button';

export interface Props {outlets:any}

export class ButtonPair extends React.Component<any,any>{
    private _el:Element;
    
    constructor(){
        super();
        
    }
    
    render(){
        return <div>
                <div>
                    <div className="ButtonPairArea">
                        <div>
                            <Button className="on" button="OnButton" outlet={this.props.outlet}></Button>
                        </div>
                        <div>
                            <Button className="off" button="OffButton" outlet={this.props.outlet}></Button>
                        </div>
                    </div>
                </div>
            </div>
    }
    
    componentDidMount = () => {
        //var id = this.props.outlets;
        //var idOn = id + "On";
        //var idOff = id + "Off";
        //console.log(id);
        //console.log(idOn);
        //console.log(idOff);
    }
}