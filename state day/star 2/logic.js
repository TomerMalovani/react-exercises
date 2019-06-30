
class App extends React.Component {
    constructor() {


        super();
        this.state = {
            greenbox: "box",
            redbox: "box",
            purplebox: "box"
        }
        this.disableGreen = this.disableGreen.bind(this);
        this.disableRed = this.disableRed.bind(this);
        this.disablePurple = this.disablePurple.bind(this);
    }
    disableGreen() {
        this.setState({
            greenbox: "boxDis"
        });
    }

    disableRed() {
        this.setState({
            redbox: "boxDis"
        });
    }
    disablePurple() {
        this.setState({
            purplebox: "boxDis"
        });
    }




    render() {
        return (
            <div>
                <h2>press it goddamnit!</h2>
                <button className={this.state.greenbox} onClick={this.disableGreen}>green</button>
                <button className={this.state.redbox} onClick={this.disableRed}>red</button>
                <button className={this.state.purplebox} onClick={this.disablePurple}>purple</button>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);