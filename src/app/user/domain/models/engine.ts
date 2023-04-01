export enum Engine {
  Gas,
  Diesel,
  Hybrid,
  Electro
}

export const engineData: { [e in Engine]: string } = {
  [Engine.Gas]: 'Бензин',
  [Engine.Diesel]: 'Дизель',
  [Engine.Hybrid]: 'Гибрид',
  [Engine.Electro]: 'Электро',
}

export const engineArrayData: { key: Engine; name: string }[] = [
  { key: Engine.Gas, name: 'Бензин' },
  { key: Engine.Diesel, name: 'Дизель' },
  { key: Engine.Hybrid, name: 'Гибрид' },
  { key: Engine.Electro, name: 'Электро' }
];
