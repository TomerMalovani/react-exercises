class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisablestate: "false"
        }
        this.clicknStuff = this.clicknStuff.bind(this);
    }
    clicknStuff() {
        this.setState({ isVisablestate: "true" });
    }

    render() {
        console.log("rendr2");

        return (
            <h2 onClick={this.clicknStuff}>i am a real  {this.state.isVisablestate} {this.props.isVisable}</h2>
        );
    }

}

class App extends React.Component {
    render() {
        console.log("rendr");
        return (
            <div>
                <Title isVisable="false" />

            </div>

        );
    }


}

ReactDOM.render(
    <App isVisable="false" />,
    document.getElementById("root")
);