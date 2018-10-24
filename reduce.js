const stdin = process.stdin;
const stdout = process.stdout;

stdin.resume();
stdin.setEncoding('utf8');

let inputString = '';
let input = [];

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  input = inputString
    .trim()
    .split('\n')
    .map(str => str.trim());

  main();
});

function outPair(key, value) {
  stdout.write(`${key}\t${value}\n`);
}

function main() {
  input.forEach(line => {
    let [key,value] = line.trim().split('\t').map(str => str.trim());

    stdout.write(`${value}\n`);
  });
}
