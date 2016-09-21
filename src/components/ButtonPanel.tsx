import * as React from "react";
import * as ReactDOM from "react-dom";
import {ButtonPair} from './ButtonPair';
import {OutletCall} from '../share'

export interface Props {Outlets:any}

export class ButtonPanel extends React.Component<any,any>{
    private _el:Element;
    
    constructor(){
        super();
        this.state = {
            "Outlets":[],
        }
    }
    
    render(){
        return <div ref={(c:Element)=>this._el=c}>
        
        
                {this.state.Outlets.map((v:any, i:any)=>{
                    return <ButtonPair key={i} outlet={v}></ButtonPair>
                })}
        
                
            </div>
    }
    
    componentDidMount = () => {
        this._el.addEventListener('click', this.clickHandler);
        OutletCall("getOutlets", {name:"grots"}, (result)=>{
            this.setState(result);
            console.log(this.state.Outlets);
        });
    }
    
    clickHandler = (ev:Event) => {
        //console.log(ev);
        //console.log("target: "+ev.target);
        let elm = ev.target as Element;
        //console.log(elm.className);
        
        let command = elm.getAttribute("data-id");
        OutletCall("pressOutlets", {command:command},(result)=>{
            console.log(result);
        });
        
    }
    
}
