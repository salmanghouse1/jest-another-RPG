//10.1.7 
const Potion = require('../lib/potion.js')


test('creates a health potion object', () => {
    const potion = new Potion('health');
    expect(potion.name).toEqual(expect.any(string));
    expect(potion.name.length).toBeGreaterThan(0);

    expect(potion.value).toEqual(expect.any(Number));
});