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

![image](https://user-images.githubusercontent.com/566536/39098812-a29b1d72-4670-11e8-93c5-60ee62d05bf0.png)

## Enabling custom dev formatters on Chrome

Chrome currently doesn’t have custom formatters enabled by default. You need to enter the DevTools settings via the menu at the top right of the DevTools panel.

Entering DevTools settings from the dropdown

![image](https://user-images.githubusercontent.com/566536/39098815-b83842ae-4670-11e8-8076-86d41da6e82c.png)

Then select “General” and enable custom formatters in the “Console” section.

![image](https://user-images.githubusercontent.com/566536/39098820-c4a91914-4670-11e8-8a27-908f8723a8e8.png)

Custom formatters checkbox in Chrome

DevTools will now use custom formatters when displaying an object.
