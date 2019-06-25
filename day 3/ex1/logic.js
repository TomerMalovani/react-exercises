
class Dot extends React.Component {
    render() {
        return (
            <div className={this.props.dot} />
        );
    }

}


class Text extends React.Component {
    render() {
        return (
            <p className={"textPart"}>{this.props.text}</p>
        );
    }

}

class Title extends React.Component {
    render() {
        return (
            <h3 className={"title"}>{this.props.title}</h3>
        );
    }

}

class Img extends React.Component {
    render() {
        return (
            <div className={this.props.Img} />
        );
    }

}

class Card extends React.Component {
    render() {
        return (
            <div className="card">{this.props.children}</div>
        );
    }

}

class App extends React.Component {
    render() {
        return (
            <div className={"wrap"}>

                <Card>
                    <Img Img="iconOne" />
                    <Title title="ready to travel" />
                    <Text text="choose your destination, plan your trip. pick the best place for your hollday" />
                    <div className={"DotWrap"}>
                        <Dot dot="on" />
                        <Dot dot="off" />
                        <Dot dot="off" />
                    </div>
                </Card>


                <Card>
                    <Img Img="iconTwo" />
                    <Title title="select the date" />
                    <Text text="select the day, pick your ticket, we give you the best price. we guaranted!" />
                    <div className={"DotWrap"}>
                        <Dot dot="off" />
                        <Dot dot="on" />
                        <Dot dot="off" />
                    </div>
                </Card>


                <Card>
                    <Img Img="iconThree" />
                    <Title title="feels like home" />
                    <Text text="enjoy you holidays! dont forget to take a beer and take a photo!" />
                    <div className={"DotWrap"}>
                        <Dot dot="off" />
                        <Dot dot="off" />
                        <Dot dot="on" />
                    </div>
                </Card>

            </div>
        );
    }

}



ReactDOM.render(
    <App />,
    document.getElementById("root")
);