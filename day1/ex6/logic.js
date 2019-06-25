class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style = {
            "letterSpacing": this.props.space
        };
        return (
            <button style={style} >{this.props.text} </button>

        );
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Title text="click" space={1 + "em"} />
                <Title text="click" space={0 + "em"} />
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