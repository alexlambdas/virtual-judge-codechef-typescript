import puzhunt from '../main/index.approach1';

describe('PUZHUNT', () => {

  //
  let numberOfTests: number = 0;

  //
  it(`test #${++numberOfTests} :: function puzzleHunt :: normal case`, () => {
    expect(puzhunt.puzzleHunt(Array('8'))).toBe('Yes');
  })

  //
  it(`test #${++numberOfTests} :: function puzzleHunt :: normal case`, () => {
    expect(puzhunt.puzzleHunt(Array('12'))).toBe('No');
  })

  //
  it(`test #${++numberOfTests} :: function puzzleHunt :: normal case`, () => {
    expect(puzhunt.puzzleHunt(Array('3'))).toBe('No');
  })
})