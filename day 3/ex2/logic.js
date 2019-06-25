class Box extends React.Component {


    render() {
        let style = {
            "height": this.props.size,
            "width": this.props.size
        }
        return (


            <div className={"box"} style={style} />
        );
    }
}




class App extends React.Component {
    render() {
        return (
            <div className="wrap">
                <Box size="20px" />
                <Box size="30px" />
                <Box size="40px" />
                <Box size="30px" />
                <Box size="20px" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);