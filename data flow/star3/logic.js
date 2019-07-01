class SubSelect extends React.Component {
    render() {
        return (
            <select>
                <option value="ArtistOne">{this.props.sublist.ArtistOne}</option>
                <option value="ArtistTwo">{this.props.sublist.ArtistTwo}</option>
                <option value="ArtistThree">{this.props.sublist.ArtistThree}</option>
            </select>
        );
    }
}

class MainSelect extends React.Component {
    render() {
        return (
            <select onChange={this.props.func} >
                <option value="Oddfuture">{this.props.list.Oddfuture.band}</option>
                <option value="BeastCoast">{this.props.list.BeastCoast.band}</option>
                <option value="rhymesayers">{this.props.list.rhymesayers.band}</option>
            </select>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rightOne: "",
            Main: {
                Oddfuture: {
                    band: "Oddfuture",
                    ArtistOne: "Tyler the creator",
                    ArtistTwo: "sweatshirt Earl",
                    ArtistThree: "Wolf"
                },
                BeastCoast: {
                    band: "BeastCoast",
                    ArtistOne: "Joey Bada$$",
                    ArtistTwo: "Capital STEEZ",
                    ArtistThree: "CJ fly"
                },
                rhymesayers: {
                    band: "rhymesayers",
                    ArtistOne: "Slug",
                    ArtistTwo: "EYEDEA",
                    ArtistThree: "grieves"
                },
            }

        }
        this.changeband = this.changeband.bind(this);
    }

    changeband(event) {
        switch (event.target.value) {
            case "Oddfuture":
                this.setState({
                    rightOne: this.state.Main.Oddfuture
                });
                console.log(this.state.rightOne);
                break;
            case "BeastCoast":
                this.setState({
                    rightOne: this.state.Main.BeastCoast
                });
                console.log(this.state.rightOne);
                break;
            case "rhymesayers":
                this.setState({
                    rightOne: this.state.Main.rhymesayers
                });
                console.log(this.state.rightOne);
                break;

            default:
                break;
        }


    }

    render() {
        return (
            <div>
                <div>
                    Main
                <MainSelect list={this.state.Main} func={this.changeband} />
                </div>
                <div>
                    sub
                <SubSelect sublist={this.state.rightOne} />
                </div>


            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);