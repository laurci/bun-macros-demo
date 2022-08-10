export function readCsv(callExpr: BunAST.CallExpression) {
    const [filename] = callExpr.arguments;

    const contents: string = Bun.readFile(Bun.cwd + filename);
    const numbers = parseCsvToArray(contents);

    return <array>
        {numbers.map(x => <number value={x}/>)}
    </array>
}


function parseCsvToArray(text: string): Array<number> {
    const data = text.split('\n').map(x => x.trim()).filter(x => x.trim().length > 0).map(x => Number(x));
    return data;
}
