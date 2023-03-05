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
