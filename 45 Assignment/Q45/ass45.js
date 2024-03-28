"use strict";
function make_car(manufacturer, model, ...options) {
    let car = {
        manufacturer, model
    };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car('Toyota', "carolla", ['color', 'red'], ['year', '2020']));
console.log(make_car('ford', "civic", ['color', 'blue'], ['sunroof', 'true']));
