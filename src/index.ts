"use strict";
import {Dog} from "./Pets/Dog";
import {Cat} from "./Pets/Cat";
import {createRandomPet} from "./Utils/Random";

/**
 * Call 'npm run start:dev' to run the script
 */

/**
 * Lessons I studied to create this project:
 *      1. Object-oriented typescript code
 *      2. Creating asynchronous Typescript code
 *      3. Configuring, compiling and debugging typescript projects
 *      4. Use of modules in typescript (Exports and default exports)
 *      5. Creating and using generics in typescript
 *      6. Creating and using decorators in typescript (@ notations wasn't sure on how to use this in the project)
 *      7. Using specialized types and language features
 *      8. Creating a Declaration File
 */

//Use of modules for the classes and all functions that are exported
//Use of interfaces, both Dog and Cat implement Pet and have their own speak function
//Use of generics and specialized types to create a random Pet, random color, random list element
//Use of async functions & promises to retrieve the random Pet Name from a rest service
Promise.all([createRandomPet<Dog>(Dog), createRandomPet<Cat>(Cat)]).then( res => {
    const [dog, cat] = res;
    console.log(`${cat.name} the ${cat.age} years old ${cat.color} cat says ${cat.speak()} to ` +
               `${dog.name} the ${dog.age} years old ${dog.color} dog who responds with a ${dog.speak()}`  );
})


