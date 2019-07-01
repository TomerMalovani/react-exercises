class Adrainy extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>rainnnnnn</div>
        );
    }

}


class Adsunny extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>sunny day hooman</div>
        );
    }

}


class Ad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.weat === "sunny" ? <Adsunny /> : <Adrainy />
        );
    }

}

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>the weather is {this.props.weat}</div>
        );
    }

}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.Weather = "sunny"
    }
    render() {
        return (
            <div>
                <Weather weat={this.Weather} />
                <Ad weat={this.Weather} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);