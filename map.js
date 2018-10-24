const stdin = process.stdin;
const stdout = process.stdout;

const RED = '\033[0;31m';
const NC = '\033[0m';

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
  let pattern = process.argv[2];
  let regEx = new RegExp(pattern, 'g');

  input.forEach(line => {
    let match = '';
    let matchIndex = [];
    let offset = 0;

    // Find the location of evry matches in the line
    while ((match = regEx.exec(line)) !== null) {
      matchIndex.push({
        start: match.index,
        end: regEx.lastIndex
      });
    }

    // No Match
    if (matchIndex.length === 0) return;

    // Color Matches
    matchIndex.forEach(index => {
      let key = line.substring(index.start, index.end);
      let left = line.substring(0, index.start);
      let right = line.substring(index.end, line.length);
      let value = `${left}${RED}${key}${NC}${right}`;

      outPair(key, value);
      // Color Offset
      offset += 13;
    });
  });
}
