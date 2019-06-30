class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.state = {
            count: 0,
            color: "black"
        };
    }
    increase() {
        let newcolor = this.state.color;
        let random = Math.floor(Math.random() * 11);
        if (random % 2 === 0) {
            newcolor = "green";
        }
        else {
            newcolor = "black";
        }
        this.setState({
            count: random,
            color: newcolor,
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.increase}>increment</button>
                <span style={{ "color": this.state.color }}>{this.state.count}</span>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);