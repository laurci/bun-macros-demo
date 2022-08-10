import {hello} from "macro:./macros/hello";

import {readCsv} from "macro:./macros/readCsv"; // this import statement is not typed

function main() {
    const text = hello();
    console.log(text);

    const contents = readCsv("hello.csv");
    console.log(contents);
}

main();

console.log(main.toString());
