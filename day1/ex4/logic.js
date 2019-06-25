
class Boxitem extends React.Component {

    render() {

        return (
            <div className={this.props.style + " box"}>
                {this.props.children}
            </div>
        );
    }
}



class App extends React.Component {
    render() {
        return (
            <div>
                <Boxitem style="firstBox">
                    <Boxitem style="SecBox">
                        <Boxitem style="ThirdBox">
                            <Boxitem style="DualBox" />
                            <Boxitem style="DualBox" />
                        </Boxitem>
                    </Boxitem>
                </Boxitem>



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