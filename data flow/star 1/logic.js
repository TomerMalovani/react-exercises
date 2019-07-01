class Btn extends React.Component {
    constructor() {
        super()
        this.childChange = this.childChange.bind(this);
    }
    childChange() {
        console.log(this.props.color);
        this.props.changeColor(this.props.color);
    }
    render() {
        return (
            <button onClick={this.childChange}>{this.props.color}</button>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Color: "white"
        }
        this.Changeclr = this.Changeclr.bind(this);
    }
    Changeclr(NewColor) {
        this.setState({
            Color: NewColor
        });
    }
    render() {
        return (
            <div>
                <Btn color="blueasthesea" changeColor={this.Changeclr} />
                <Btn color="green" changeColor={this.Changeclr} />
                <Btn color="red" changeColor={this.Changeclr} />
                <div className={"box " + this.state.Color}></div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);