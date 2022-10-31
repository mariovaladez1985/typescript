import fetch from "node-fetch";

async function fetchData(url: string) {
    try {
        const response = await fetch(url, {method: 'GET'});
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const arrayList = (await response.json()) as  { data: Array<string> }
        return arrayList.data;
    } catch (error) {
        console.error('Unable to fetch data:', error);
        return []
    }
}

//Use memoization for names array
let listOfNames: Array<string> = []
export async function fetchNames(): Promise<Array<string>> {
    if(listOfNames.length === 0)
        listOfNames = await fetchData('https://www.randomlists.com/data/names-male.json');
    return listOfNames;
}
