

class Clickmaker extends React.Component {
    constructor() {
        super();
        this.Stringo = this.Stringo.bind(this);
        this.PressMe = this.PressMe.bind(this);
    }
    Stringo(num) {
        let word = []
        for (let i = 0; i < num; i++) {
            word[i] = i;
        }
        return word;
    }
    PressMe() {
        document.getElementsByClassName("ThisIs")[0].innerHTML = this.Stringo(13);
    }
    render() {

        return (
            <div>
                <button onClick={this.PressMe}>text for matan</button>
                <div className="This">
                    <h1>the numbers are: </h1>
                    <div className="ThisIs"></div>
                </div>
            </div>
        );
    }

}




ReactDOM.render(
    <Clickmaker />,
    document.getElementById("root")
);