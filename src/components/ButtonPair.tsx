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
                            <Button button="OnButton" outlet={this.props.outlet}></Button>
                        </div>
                        
                        <div>
                            <Button button="OffButton" outlet={this.props.outlet}></Button>
                        </div>
                    </div>
                </div>
            </div>
    }
    
    componentDidMount = () => {}
}