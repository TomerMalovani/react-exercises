class ColThree extends React.Component {
    render() {
        return (
            <div className="Col">
                <ImgThree />
                <p className="SubTxt">user interface design to make real people feel real feelings</p>
            </div>

        );
    }
}


class ColTwo extends React.Component {
    render() {
        return (
            <div className="Col">
                <ImgTwo />
                <p className="SubTxt">concept and idea for you to re-invent whatever u think u may</p>
            </div>

        );
    }
}


class ColOne extends React.Component {
    render() {
        return (
            <div className="Col">
                <ImgOne />
                <p className="SubTxt">design brands : Nike Adidas Supra Vans</p>
            </div>

        );
    }
}

class ImgThree extends React.Component {
    render() {
        return (
            <div className="Img Three">

            </div>

        );
    }
}

class ImgTwo extends React.Component {
    render() {
        return (
            <div className="Img Two">

            </div>

        );
    }
}

class ImgOne extends React.Component {
    render() {
        return (
            <div className="Img One">

            </div>

        );
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
    render() {
        return (
            <div className="Menu">
                <ul className="Menubar">
                    <li className="Bar">services</li>
                    <li className="Bar">work</li>
                    <li className="Bar">the team</li>
                </ul>
            </div>

        );
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