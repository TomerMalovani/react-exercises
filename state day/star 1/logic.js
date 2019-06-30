
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ColorClass: ""
        }
        // this.turnGreen = this.turnGreen.bind(this);
        // this.turnRed = this.turnRed.bind(this);
        // this.turnPurple = this.turnPurple.bind(this);
        this.picker = this.picker.bind(this);
    }

    picker(event) {
        this.setState({
            ColorClass: event.target.textContent
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.picker}>green</button>
                <button onClick={this.picker}>red</button>
                <button onClick={this.picker}>purple</button>
                <div className={`box ${this.state.ColorClass}`}></div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);