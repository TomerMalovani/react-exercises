class Box extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className={"box " + this.props.move}></div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            ismoveing: ""
        }
    }
    componentDidMount() {
        this.setState({
            ismoveing: "move"
        });
    }

    render() {
        return (
            <div>
                <Box move={this.state.ismoveing} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}, 4000);