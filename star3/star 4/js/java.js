// 1. create a Plant class for a greenhouse
// The greenhouse has customers that wants to buy flowers according to the following parameters:
// - season
// - color
// - if they blossom
// 2. create a set of plants that the greenhouse has.
// 3. create a function (not in the Plant class) that returns all the plants that are blossoming
// in a specific season.


class Plant {
    constructor(season, color, isblossom, name) {
        this.name = name;
        this.season = season;
        this.color = color;
        this.isblossom = isblossom;
    }
}

let sunflower = new Plant("summer", "yellow", true, "sunflower");
let moonflower = new Plant("winter", "blue", false, "moonflower");
let eye_of_the_tiger = new Plant("summer", "brown", true, "eye_of_the_tiger");

let plants = [sunflower, moonflower, eye_of_the_tiger];


function plants_by_types(Plants, Season) {
    let ArrToReturn = [];
    Plants.forEach(plants => {
        if (Plants.Season === Season) {
            ArrToReturn.push(Plants.name);
        }

        return ArrToReturn;

    });
    console.log(ArrToReturn);
}

let e = plants_by_types(plants, "summer");
