class TypeBox extends React.Component {
    constructor(props) {
        super(props);
    }
    Typein() {

    }


    render() {
        return (
            <div>
                <input onInput={this.props.call} type="text"></input>
                <div>{this.props.Input}</div>
            </div>
        );
    }

}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Input: ""
        }
        this.input = this.input.bind(this);
    }
    input(event) {
        this.setState({
            Input: event.target.value,
        });
    }
    render() {
        return (
            <div>
                <TypeBox Input={this.state.Input} call={this.input} />
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);