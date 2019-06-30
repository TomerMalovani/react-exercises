class Block extends React.Component {
    constructor(props) {
        super(props);
        this.Show = this.Show.bind(this);
        this.state = {
            display: "block",

        };
    }
    Show() {

        let showOrnot = this.state.display === "block" ? "none" : "block";
        console.log(showOrnot);

        this.setState({
            display: showOrnot,
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.Show}>increment</button>
                <div className="box" style={{ "display": this.state.display }}></div>
            </div>
        );
    }
}

ReactDOM.render(
    <Block />,
    document.getElementById("root")
);