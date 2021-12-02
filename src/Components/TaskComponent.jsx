import React, {Component} from "react";
import TaskServices from "../services/TaskServices";


export class TaskComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            task:''
        }
    }
    handletask=(event)=>{
        this.setState({
            task:event.target.value
        })
    }
    handlesubmit=(event)=>{
        let task={
            task:this.state.task
        }
        console.log(task);
        TaskServices.savetask(task).then((res)=>{
            console.log(res);
        })
        window.location.reload(false);
    }
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                    <h1>Tasks To-Do:</h1>
                         <input type="text" placeholder="enter your task here" className="form-control" value={this.state.task} onChange={this.handletask}></input>
                    </div><br></br>
                    <button type="button" onClick={this.handlesubmit} className="btn btn-success">+Add</button>
                </form>
            </div>
        );
    }
} 
export default TaskComponent;