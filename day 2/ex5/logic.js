function render(data) {

    ReactDOM.render(
        <div className="wrap">
            <a className="WebSiteLink" style={{ color: data.color, }} href={data.linkAddress}>go to website</a> ,
        <input type="range" min={data.min} max={data.max}></input> ,
         <input type="button" value={data.buttonText} style={{ color: data.color }}></input> ,
        </div>,

        document.getElementById("root"));
}
var data = {
    linkAddress: "https://www.google.com/",
    linkText: "google",
    min: -5,
    max: 5,
    color: "maroon",
    "font-weight": "bold",
    buttonText: "click me"
};
render(data);


