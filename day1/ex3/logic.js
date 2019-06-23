class RandomBtn extends React.Component {
    render() {
        return (
            <div>
                <input type="button" className="button" value="click"></input>
            </div>

        );
    }
}


class RandomName extends React.Component {
    render() {
        return (
            <div className="Box">
                <RandomBtn />
            </div>

        );
    }
}


class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <RandomName />
            </div>

        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById("root")
);