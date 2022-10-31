import {Pet} from "../Pets/Pet";
import {fetchNames} from "./Names";

export async function createRandomPet<T extends Pet>
    (type: { new(name: string, age: number, color: string ): T;} ): Promise<T> {
    const [name] = await Promise.all([
        getRandomName(),
    ]);

    return new type(name, randomNumber(15), randomColor());
}

export function randomListElement<T>(list: T[]): T | undefined {
    return list[Math.floor(Math.random() * list.length)];
}

export function randomNumber(max: number) {
    return Math.floor(Math.random() * max)
}

const supportedColors = ["black", "white", "golden", "auburn", "gray"]
export function randomColor() {
    return randomListElement(supportedColors) || "white"
}

export async function getRandomName(): Promise<string> {
    try {
        const response = await Promise.all([ fetchNames() ]);
        const [names] = response;
        return randomListElement(names) || "Mario";
    } catch(error) {
        console.error('Unable to generate name:', error);
        return "";
    }
}