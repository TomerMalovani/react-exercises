
class Box extends React.Component {
    constructor() {
        super()
        console.log("constructor box  was renderd");
    }
    componentWillReceiveProps(nextProps) {
        console.log("I received props!");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("I was updated!");
    }
    render() {
        let boxStyle = {
            margin: 20,
            padding: 10,
            border: "1px solid black",
            display: this.props.isShown ? "block" : "none"

        }
        console.log("render box  was renderd");
        return <div style={boxStyle}>{this.props.children}</div>
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            isShown: true
        }
        console.log("constructor app was renderd");

    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isShown: !this.state.isShown
            });
        }, 1000)
    }

    render() {
        console.log("render app  was renderd");
        return (
            <Box isShown={this.state.isShown}>
                <Box isShown={this.state.isShown} />
                <Box isShown={this.state.isShown} />
            </Box>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));