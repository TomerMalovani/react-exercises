class Donelist extends React.Component {
    render() {
        return (
            <div className="ListWrap">
                <div className="ToDoHeader">completed:</div>
                <ul className="Mainlist">
                    {this.props.Listdone}
                </ul>
            </div>
        );
    }
}


class List extends React.Component {
    render() {
        return (
            <div className="ListWrap">
                <div className="ToDoHeader">To Do:</div>
                <ul className="Mainlist">
                    {this.props.list}
                </ul>
            </div>
        );
    }
}


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Inputvalue: ""
        }
        this.localFuncAddTask = this.localFuncAddTask.bind(this);
        this.changetext = this.changetext.bind(this);
    }

    changetext(e) {
        this.setState({
            Inputvalue: e.target.value
        });
    }

    localFuncAddTask() {
        if (this.state.Inputvalue !== "") {
            this.props.TaskAdder(this.state.Inputvalue);
            this.setState({
                Inputvalue: ""
            });
        }

    }
    render() {
        return (
            <div className="mainInput">
                <input className="InputBar" onChange={this.changetext} value={this.state.Inputvalue} type="text"></input>
                <button onClick={this.localFuncAddTask}>Add</button>
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            List: [],
            Donelist: [],
            count: 0,
            countDone: 0,
            isDone: ""
        }
        this.AddTask = this.AddTask.bind(this);
        this.DeleteTask = this.DeleteTask.bind(this);
        this.MarkAsDone = this.MarkAsDone.bind(this);
        this.MarkasNotdone = this.MarkasNotdone.bind(this);
        this.DeleteDoneTask = this.DeleteDoneTask.bind(this);

    }

    MarkasNotdone(event) {
        console.log(event.target.firstChild.innerHTML);
        this.AddTask(event.target.firstChild.innerHTML)
        event.target.remove();
    }

    MarkAsDone(e) {
        this.setState({
            countDone: this.state.countDone + 1,
            Donelist: [...this.state.Donelist, <li onClick={this.MarkasNotdone} className="listItem DoneTask" key={this.state.countDone}><span className="TaskText">{e.target.firstChild.innerHTML}</span><button className="removeBtn" onClick={this.DeleteDoneTask}>x</button></li>]
        });
        e.target.remove();
    }


    AddTask(newTask) {

        this.setState({
            List: [...this.state.List, <div className="ListItemW"><li onClick={this.MarkAsDone} className="listItem" key={this.state.count}><span className="TaskText">{newTask}</span><button className="removeBtn" onClick={this.DeleteTask}>x</button></li> </div>],
            count: this.state.count + 1
        });

    }
    DeleteTask(e) {
        console.log(e.target.parentNode);
        e.target.parentNode.remove();
        this.setState({
            count: this.state.count + 1
        });
    }

    DeleteDoneTask(e) {
        e.target.parentNode.remove();
        this.setState({
            countDone: this.state.countDone + 1
        });
    }
    render() {
        return (
            <div className="Main">
                <Input TaskAdder={this.AddTask} />
                <List list={this.state.List} />
                <Donelist Listdone={this.state.Donelist} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);