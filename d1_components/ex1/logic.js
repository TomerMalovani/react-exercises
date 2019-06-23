class Box5 extends React.Component {
    render() {
        return (
            <div className="box5">

            </div>
        );
    }

}

class Box4 extends React.Component {
    render() {
        return (
            <div className="box4">
                <Box5 />

                <Box5 />
            </div>
        );
    }

}

class Box3 extends React.Component {
    render() {
        return (
            <div className="box3">
                <Box4 />

            </div>
        );
    }

}

class Box2 extends React.Component {
    render() {
        return (
            <div className="box2">
                <Box3 />
            </div>
        );
    }

}

class Box1 extends React.Component {
    render() {
        return (
            <div className="box1">
                <Box2 />
            </div>
        );
    }

}


ReactDOM.render(

    <Box1 />,
    document.getElementById("root")
);