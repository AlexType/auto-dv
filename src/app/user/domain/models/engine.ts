export enum Engine {
  Gas,
  Diesel,
  Hybrid,
  Electro
}

export const EngineData: { [e in Engine]: string } = {
  [Engine.Gas]: 'Бензин',
  [Engine.Diesel]: 'Дизель',
  [Engine.Hybrid]: 'Гибрид',
  [Engine.Electro]: 'Электро',
}
