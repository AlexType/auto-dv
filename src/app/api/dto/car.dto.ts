import { Engine } from "src/app/user/domain/models/engine";

export interface Car {
  _id: string;
  img: string;
  mark: string;
  model: string;
  cc: number;
  engine: Engine;
  year: number;
  price: number;
  availability: boolean;
}
