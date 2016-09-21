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
        return <div>
        
        
                {this.state.Outlets.map((v:any, i:any)=>{
                    return <ButtonPair key={i} outlet={v}></ButtonPair>
                })}
        
                
            </div>
    }
    
    componentDidMount = () => {
        OutletCall("getOutlets", {name:"grots"}, (result)=>{
            this.setState(result);
            console.log(this.state.Outlets);
        });
    }
}