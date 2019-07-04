class List extends React.Component {
    render() {
        return (
            <div className="ListWrap">
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
            count: 0,
            isDone: ""
        }
        this.AddTask = this.AddTask.bind(this);
        this.DeleteTask = this.DeleteTask.bind(this);
        this.MarkAsDone = this.MarkAsDone.bind(this);
    }

    MarkAsDone(e) {
        console.log("hey its working")
        e.target.classList.add("DoneTask");
    }

    AddTask(newTask) {

        this.setState({
            List: [...this.state.List, <li onClick={this.MarkAsDone} className="listItem" key={this.state.count}>{newTask}<button className="removeBtn" onClick={this.DeleteTask}>x</button></li>],
            count: this.state.count + 1
        });
        console.log(this.state.List);
    }
    DeleteTask(e) {
        e.target.parentNode.remove();
    }
    render() {
        return (
            <div className="Main">
                <Input TaskAdder={this.AddTask} />
                <List list={this.state.List} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);