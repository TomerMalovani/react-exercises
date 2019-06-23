class Quiz extends React.Component {
    render() {
        return (
            <div className="Quiz">
                <input type="text"></input>
            </div>
        );
    }

}

class QuizTitle extends React.Component {
    render() {
        return (
            <div className="QuizTitles">
                what is your fav ting bout them apples
            </div>
        );
    }

}

class Q1Input extends React.Component {
    render() {
        return (
            <div className="secondHeader">
                <input type="range" min="0" max="2"></input>
            </div>
        );
    }

}

class Q2Title extends React.Component {
    render() {
        return (
            <div className="secondHeader">
                how much do you love them apples?
            </div>
        );
    }

}

class Q1Title extends React.Component {
    render() {
        return (
            <div className="header">
                how do you like them apples?
            </div>
        );
    }

}

class MainBOx extends React.Component {
    render() {
        return (
            <div className="Mainbox">
                <Q1Title />
                <Q2Title />
                <Q1Input />
                <QuizTitle />
                <Quiz />
            </div>
        );
    }

}


ReactDOM.render(
    <MainBOx />,
    document.getElementById("root")
);