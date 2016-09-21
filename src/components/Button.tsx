import * as React from "react";
import * as ReactDOM from "react-dom";

export interface Props {outlet:any, button:any}

export class Button extends React.Component<any,any>{
    private _el:Element;
    
    constructor(){
        super();
    }
    
    render(){
        return <div>
                <div className={this.props.button}>
                    <div className="center" >{this.props.outlet.Name}</div>
                </div>
            </div>
    }
}