class CheckBox extends React.Component {
    render() {
        return (
            <input id={this.props.id} type={"CheckBox"}>{this.props.text}</input>
        );
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            check: false
        }
    }

    render() {
        return (
            <div>
                <div>
                    <CheckBox id="checkbox1" text="do you agree?" />
                </div>
                <div>
                    <CheckBox id="checkbox2" text="do you really agree?" />
                </div>
                <div>
                    <CheckBox id="checkbox3" text="are you sure?" />
                </div>
                <div>
                    <CheckBox id="checkbox4" text="do you really sure?" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);