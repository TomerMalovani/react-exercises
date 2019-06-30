
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            ColorClass: "white"
        }
        this.turnGreen = this.turnGreen.bind(this);
        this.turnRed = this.turnRed.bind(this);
        this.turnPurple = this.turnPurple.bind(this);
    }
    turnGreen() {
        this.setState({
            ColorClass: "green"
        });
    }

    turnRed() {
        this.setState({
            ColorClass: "red"
        });
    }


    turnPurple() {
        this.setState({
            ColorClass: "purple"
        });
    }


    render() {
        return (
            <div>
                <button onClick={this.turnGreen}>green</button>
                <button onClick={this.turnRed}>red</button>
                <button onClick={this.turnPurple}>purple</button>
                <div className={"box " + this.state.ColorClass}></div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);