class Box extends React.Component {
    render() {
        var style = {
            "letterSpacing": this.props.space
        };
        return (
            <div className={this.props.color + " box"}>
                <h4>{this.props.text} </h4>
            </div>


        );
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Box color="blue" text="blue" />
                <Box color="red" text="red" />
                <Box color="brown" text="brown" />
                <Box color="purple" text="purple" />
            </div>
        );
    }
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();