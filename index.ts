#! /usr/bin/env node

import inquirer from "inquirer";

type wordCount = (str: string) => void;

const wordCount: wordCount = (string) => {
    const words = string.trim().split(/\s+/g);

    console.log("Total Words In This Para Are: " + words.length);

}

const getInput = async() => {
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "paragraph",
        message: "Enter Your Para: "
    }
]);
await wordCount(userInput.paragraph);
};

console.clear();
await getInput()





