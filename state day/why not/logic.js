class App extends React.Component {
    constructor() {
        super()
        this.state = {
            Color: ""
        }
        this.colorPick = this.colorPick.bind(this);
    }
    colorPick(event) {
        let color = event.target.value
        console.log(color);
        this.setState({
            Color: color
        });
    }


    render() {
        return (
            <div>
                <div>
                    <select onChange={this.colorPick}>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="purple">purple</option>
                    </select>
                </div>
                <span>your shirt will be </span> <span style={{ "color": this.state.Color }}>{this.state.Color}</span>


            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);