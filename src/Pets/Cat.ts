import {Pet} from "./Pet";

export class Cat implements Pet {
    constructor(
        public name: string, public age: number, public color: string
    ) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    speak = function(){
        return "Meow"
    }
}

