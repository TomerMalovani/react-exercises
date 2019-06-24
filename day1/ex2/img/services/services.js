class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Title />
                <Services />
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <span>SERVICES</span>
                <span>WORK</span>
                <span>THE TEAM</span>
                <div></div>
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>SERVICES</h1>
                <p>
                    our vision is simple, we want to create websites and applications with both high quality
                    design and easy-to-access content. The finished product will be totaly unique and awesome.
                </p>
            </div>
        );
    }
}

class Services extends React.Component {
    render() {
        return (
            <div id="services">
                <Service1 />
                <Service2 />
                <Service3 />
            </div>
        );
    }
}

class Service1 extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon />
                <Description />
            </div >
        );
    }
}

class Icon extends React.Component {
    render() {
        return (
            <div className="icon-wrapper blue">
                <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"></img>
            </div>
        );
    }
}

class Description extends React.Component {
    render() {
        return (
            <div className="title">
                <h5>USER INTERFACE</h5>
                <div>Wireframing</div>
                <div>Prototyping</div>
                <div>Usability Testing</div>
            </div>
        );
    }
}


class Service2 extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon2 />
                <Description2 />
            </div >
        );
    }
}

class Icon2 extends React.Component {
    render() {
        return (
            <div className="icon-wrapper green">
                <img src="http://simpleicon.com/wp-content/uploads/rocket.png"></img>
            </div>
        );
    }
}

class Description2 extends React.Component {
    render() {
        return (
            <div className="title">
                <h5>CONCEPT AND IDEAS</h5>
                <div>Conceptualization</div>
                <div>Digital Planning</div>
                <div>Product Strategy</div>
            </div>
        );
    }
}

class Service3 extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon3 />
                <Description3 />
            </div >
        );
    }
}

class Icon3 extends React.Component {
    render() {
        return (
            <div className="icon-wrapper lilac">
                <img src="https://openclipart.org/image/2400px/svg_to_png/213252/Gear-icon.png"></img>
            </div>
        );
    }
}

class Description3 extends React.Component {
    render() {
        return (
            <div className="title">
                <h5>DESIGN AND BRANDING</h5>
                <div>Interactive Design</div>
                <div>Graphic Design</div>
                <div>Unique Strategy</div>
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

// invoking the render function
render();