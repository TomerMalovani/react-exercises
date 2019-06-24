class ColThree extends React.Component {
    render() {
        return (
            <div className="Col">
                <ImgThree />
                <p className="SubTxt" onMouseEnter={this.on} onMouseLeave={this.off}>user interface design to make real people feel real feelings</p>
            </div>

        );
    }
    on(event) {
        event.target.classList.add("hoverP");
    };

    off(event) {
        event.target.classList.remove("hoverP");
    }
}


class ColTwo extends React.Component {
    render() {
        return (
            <div className="Col">
                <ImgTwo />
                <p className="SubTxt" onMouseEnter={this.on} onMouseLeave={this.off}>concept and idea for you to re-invent whatever u think u may</p>
            </div>

        );
    }
    on(event) {
        event.target.classList.add("hoverP");
    };

    off(event) {
        event.target.classList.remove("hoverP");
    }
}


class ColOne extends React.Component {
    render() {
        return (
            <div className="Col">
                <ImgOne />
                <p className="SubTxt" onMouseEnter={this.on} onMouseLeave={this.off}>design brands : Nike Adidas Supra Vans</p>
            </div>

        );
    }
    on(event) {
        event.target.classList.add("hoverP");
    };

    off(event) {
        event.target.classList.remove("hoverP");
    }
}

class ImgThree extends React.Component {
    constructor() {
        super()
        this.on = this.on.bind(this);
        this.off = this.off.bind(this);

    }
    render() {
        return (
            <div className="Img Three" id="img3" onMouseEnter={this.on} onMouseLeave={this.off}>

            </div>

        );
    }
    on() {
        console.log("hey");
        let img = document.getElementById("img3");
        img.className = "Three_hover";
    };

    off() {
        let img = document.getElementById("img3");
        img.className = "img Three";
    }
}

class ImgTwo extends React.Component {
    constructor() {
        super()
        this.on = this.on.bind(this);
        this.off = this.off.bind(this);

    }
    render() {
        return (
            <div className="Img Two" id="img2" onMouseEnter={this.on} onMouseLeave={this.off}>

            </div>

        );
    }
    on() {
        console.log("hey");
        let img = document.getElementById("img2");
        img.className = "Two_hover";
    };

    off() {
        let img = document.getElementById("img2");
        img.className = "img Two";
    }
}

class ImgOne extends React.Component {

    constructor() {
        super()
        this.on = this.on.bind(this);
        this.off = this.off.bind(this);

    }
    render() {

        return (
            <div className="Img One" id="img1" onMouseEnter={this.on} onMouseLeave={this.off}>

            </div>

        );
    }
    on() {
        console.log("hey");
        let img = document.getElementById("img1");
        img.className = "One_hover";
    };

    off() {
        let img = document.getElementById("img1");
        img.className = "img one";
    }
}





class PicPart extends React.Component {
    render() {
        return (
            <div className="PicPart">
                <ColOne />
                <ColTwo />
                <ColThree />
            </div>

        );
    }

}

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1 className="HeaderTitle">services</h1>
                <p className="HeaderText">our vision is simple, we want to create websites and apps with both high quaility design and and easy-to-accsess</p>

            </div>

        );
    }

}
class MainBody extends React.Component {
    render() {
        return (
            <div className="MainBody">
                <Header />
                <PicPart />
            </div>

        );
    }

}

class MenuNav extends React.Component {
    constructor() {
        super()
        this.on = this.on.bind(this);
        this.off = this.off.bind(this);

    }
    render() {

        return (
            <div className="Menu">
                <ul className="Menu" >
                    <li className="Bar" onMouseEnter={this.on} onMouseLeave={this.off}>services</li>
                    <li className="Bar" onMouseEnter={this.on} onMouseLeave={this.off}>work</li>
                    <li className="Bar" onMouseEnter={this.on} onMouseLeave={this.off}>the team</li>
                </ul>
            </div>

        );
    }
    on(event) {
        event.target.classList.add("hoverText");
    }

    off(event) {
        event.target.classList.remove("hoverText");
    }

}


class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <MenuNav />
            </div>
        );
    }

}

class Page extends React.Component {
    render() {
        return (
            <div className="Page">
                <Menu />
                <MainBody />

            </div>

        );
    }

}


ReactDOM.render(

    <Page />,

    document.getElementById("root")
);