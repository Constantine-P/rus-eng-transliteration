import test from 'node:test';
import assert from 'node:assert';
import { convert, reverse } from './index.js';


test('slugify / unslugify with "-" symbol', () => {
  const input = 'объектно-ориентированный язык программирования, ну-ну';
  const convertion = convert(input, { slugify: true });
  const reversion = reverse(convertion, { slugify: false });
  assert.strictEqual(input, reversion);
});
