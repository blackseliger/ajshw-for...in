import SortbyProps, { arr, obj } from "../js/app";


describe('arrayContaining', () => {
  const expected = [
    {key: "name", value: "мечник"}, // порядок взят из массива с ключами
    {key: "level", value: 2}, // порядок взят из массива с ключами
    {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ];

  it('arrays must match', () => {
    const sortbyProps = new SortbyProps(obj, arr)
    expect(sortbyProps.sort()).toEqual(expect.arrayContaining(expected));
  });
});
