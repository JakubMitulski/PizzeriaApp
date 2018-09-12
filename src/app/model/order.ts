import {Meal} from "./meal";

export class Order {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: number;
  status: string;
  meals: Meal[];
  orderDate: Date;
}
