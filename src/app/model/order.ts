export interface Order {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: number;
  status: string;
  mealIds: number[];
  orderDate: Date;
}
