/* Jestのテストの書き方 */

'use strict';
const dc = require('../');

/* 
  Jestのdescribe関数
      第一引数...テストを行う対象
      第二引数...テストの処理を記述した無名関数（ここでは無名関数内でtest関数を呼んでいる）
  Jestのtest関数
      第一引数...テストを行う要件を文字列で記載
      第二引数...テスト自体の処理を記述した無名関数
  except関数、toBe関数...同じ値になるかどうかを検証
*/
describe('#effectiveDamage()', () => {
  test('正常なダメージ計算ができる', () => {
    expect(dc.effectiveDamage(100, 50, 30)).toBe(83);
  });

  test('負の異常値におけるダメージ計算が出来る', () => {
    expect(dc.effectiveDamage(-1, 0, 0)).toBe(0);
    expect(dc.effectiveDamage(0, -1, 0)).toBe(0);
    expect(dc.effectiveDamage(0, 0, -1)).toBe(0);
  });

  test('2000より大きい異常値におけるダメージ計算ができる', () => {
    expect(dc.effectiveDamage(2001, 0, 0)).toBe(2000);
    expect(dc.effectiveDamage(300, 2150, 0)).toBe(14);
    expect(dc.effectiveDamage(300, 2000, 2001)).toBe(300);
  });

  test('実行防御力は０未満にならない', () => {
    expect(dc.effectiveDamage(500, 100, 800)).toBe(500);
  })
});