# named-objects
A custom devtool formatter used to name objects for debugging purposes

## Usage

```javascript
import { Name } from "named-objects"; 

const Car = {
    [Name]: "Car",
    wheels: 4,
    speed: 0,
    drive(){
        this.speed = 120;
    },
    stop(){
        this.speed = 0;
    }
};
 
// my custom factory function maker to replace the new operator 
const New = proto => props => Object.assign(Object.create(proto), props) 
 
 
// create a sub-prototype from Car prototype
const Yaris = New(Car)({
    [Name]: "Yaris",
    constructor: "Toyota", // the 'constructor' property can be used without any issues
    model: "Yaris"
});
 
 
const maVoiture = New(Yaris)({ owner: "Sylvain" })

```

## Screenshot

## Enabling custom dev formatters on Chrome

Chrome currently doesn’t have custom formatters enabled by default. You need to enter the DevTools settings via the menu at the top right of the DevTools panel.

Entering DevTools settings from the dropdown

Then select “General” and enable custom formatters in the “Console” section.

Custom formatters checkbox in Chrome

DevTools will now use custom formatters when displaying an object.