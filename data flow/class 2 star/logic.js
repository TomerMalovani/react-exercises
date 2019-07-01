class Box extends React.Component {
    constructor(props) {
        super(props)
        this.Dopechange = this.Dopechange.bind(this);
    }

    Dopechange(event) {
        event.stopPropagation();
        this.props.Colorchange(this.props.color);
    }

    render() {
        return (
            <div onClick={this.Dopechange} className={"box " + this.props.size + " " + this.props.color}>{this.props.children} </div>
        );

    }
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: "white"
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(currentColor) {
        this.setState({
            color: currentColor
        });
    }
    render() {
        return (
            <div>
                <Box size="boxOne" color={this.state.color} Colorchange={this.changeColor} >
                    <Box size="boxTwo" color="black" Colorchange={this.changeColor}>
                        <Box size="boxThree" color="pink" Colorchange={this.changeColor}>
                            <Box size="boxFour" color="yellow" Colorchange={this.changeColor} />
                            <Box size="boxFour" color="green" Colorchange={this.changeColor} />
                        </Box>
                    </Box>
                </Box>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);