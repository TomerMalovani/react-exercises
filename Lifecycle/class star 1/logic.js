class Box extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className={"box " + this.props.color + " " + this.props.border}></div>;
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.Interval = "";
        this.state = {
            color: "red",
            border: ""

        }
        this.counter = 0;

    }

    componentDidMount() {
        this.Interval = setInterval(() => {
            this.counter = this.counter + 1;
            console.log(this.counter);
            if (this.counter === 5) {
                console.log("now");
                this.setState({
                    border: "circle"
                });
            }
            switch (this.state.color) {
                case "red":
                    this.setState({
                        color: "yellow"
                    });
                    break;
                case "yellow":
                    this.setState({
                        color: "green"
                    });
                    break;
                case "green":
                    this.setState({
                        color: "blue"
                    });
                    break;
                case "blue":
                    this.setState({
                        color: "red"
                    });
                    break;

            }

        }, 500)

    }


    componentWillUnmount() {
        clearInterval(this.Interval);
    }
    render() {
        return (
            <div>
                <Box color={this.state.color} border={this.state.border} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));


setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}, 5000);

