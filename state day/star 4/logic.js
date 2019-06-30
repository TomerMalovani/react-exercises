

class Notf extends React.Component {
    constructor() {
        super()
        this.state = {
            Notf: Math.floor(Math.random() * 10) + 1
        }

    }


    render() {
        return (
            <div className={"ntf"}>
                {this.state.Notf}
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Toolbar />
            </div>
        );
    }
}

class NotfBtn extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={"notfBox"}>
                <Notf />
            </div>
        );
    }

}

class NoramlBtn extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={"box"}></div>
        );
    }

}

class Toolbar extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={"toolbar"}>
                <NoramlBtn />
                <NoramlBtn />
                <NotfBtn />
            </div>
        );
    }

}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);