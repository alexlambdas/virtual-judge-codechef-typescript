//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input: string = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

function puzzleHunt(dataIn: string[]): string{
  const teamLength: number = parseInt(dataIn[0]);
  if(teamLength >= 6 && teamLength <= 8) return 'Yes';
  else return 'No';
}

function entryPoint(dataIn: string[]): void{
  const result: string = puzzleHunt(dataIn);
  console.log(result);
}

entryPoint(Array('8'));

export default {
  puzzleHunt,
}