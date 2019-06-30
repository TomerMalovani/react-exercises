class MensShirt extends React.Component {
    render() {

        return (
            <div>
                <p >your shirt will be </p> <p id="shirtColor"></p>

            </div>
        );

    }

}


class ColorSelector extends React.Component {
    constructor() {
        super();
        this.changeWord = this.changeWord.bind(this);
    }
    changeWord(e) {
        let text = document.getElementById("shirtColor");
        text.innerHTML = " ";

        console.log("word");
        text.classList.add(e.target.value);
        text.innerHTML += " " + e.target.value;
    }
    render() {
        return (
            <select onChange={this.changeWord}>
                <option value="darklord">dark lord</option>
                <option value="yellow" >bright sun</option>
                <option value="navy">grey sea</option>
                {this.props.children}
            </select>
        );

    }

}


class App extends React.Component {
    render() {
        return (
            <div>
                <ColorSelector />
                <MensShirt />
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);