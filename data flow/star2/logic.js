class Title extends React.Component {
    render() {
        return (
            <h3>read the following terms to join in</h3>
        );
    }
}

class Welcome extends React.Component {
    render() {
        return (
            <h2 className={this.props.join}>4747474747 welcome bruh 4747474747</h2>
        );
    }
}

class Terms extends React.Component {
    render() {
        return (

            <div><p>you gotta love the 47,
                  your name gotta be ben from now on..change it and make it so.</p></div>
        );
    }
}

class CheckBox extends React.Component {
    constructor() {
        super()
        this.changeCheckbox = this.changeCheckbox.bind(this);

    }

    changeCheckbox(event) {
        if (event.target.checked === true) {
            this.props.func(1);
        }
        else {
            this.props.func(-1);
        }
        console.log(event.target.checked);

    }
    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.changeCheckbox} ></input><label>{this.props.text}</label>
            </div>
        );
    }
}
class Btn extends React.Component {
    render() {
        return (
            <button onClick={this.props.func} disabled={this.props.dis} >Next</button>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: "disabled",
            join: "welcome"
        }
        this.checkIfAllCheck = this.checkIfAllCheck.bind(this);
        this.WelcomeBro = this.WelcomeBro.bind(this);
        this.countcheck = 0;
    }
    checkIfAllCheck(count) {
        this.countcheck = this.countcheck + count;
        console.log(this.countcheck);
        this.setState({
            disabled: this.countcheck === 2 ? "" : "disabled"
        });

    }

    WelcomeBro() {
        this.setState({
            join: ""
        });
    }
    render() {
        return (
            <div>
                <Title />
                <Terms />
                <CheckBox func={this.checkIfAllCheck} text="do you understand?" />
                <CheckBox func={this.checkIfAllCheck} text="do you agree?" />
                <Btn func={this.WelcomeBro} dis={this.state.disabled} />
                <Welcome join={this.state.join} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);