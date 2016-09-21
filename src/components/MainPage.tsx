import * as React from "react";
import * as ReactDOM from "react-dom";
import {ButtonPanel} from './ButtonPanel';
import {OutletCall} from '../share'

export class MainPage extends React.Component<any,any>{
    private _el:Element;
    
    constructor(){
        super();
        this.state = {
            "Count":0,
            "Outlets":[],
        }
    }
    
    render(){
        return <div ref={(c:any) => this._el=c}>
                <ButtonPanel ></ButtonPanel>
            </div>
    }
    /*
    componentWillMount = () => {
        
        OutletCall("getOutlets", {name:"grots"}, (result)=>{
            this.setState(result);
            console.log(this.state.Outlets);
        });
    }*/
    
    componentDidMount = () => {
        this._el.addEventListener('click', this.clickHandler);
        
    }
    
    clickHandler = (ev:Event) => {
        console.log(ev);
        console.log("target: "+ev.target);
        let elm = ev.target as Element;
        console.log(elm.className);
    }
}