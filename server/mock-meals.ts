import {Meal} from "../src/app/model/meal";

export const MEALS: Meal[] = [
  {
    "id": 1,
    "name": "Pizza Margherita",
    "isAvailable": true,
    "description": "Sos, ser",
    "type": "pizza",
    "price": 22
  },
  {
    "id": 2,
    "name": "Pizza Funghi",
    "isAvailable": true,
    "description": "Sos, ser, pieczarki",
    "type": "pizza",
    "price": 23.50
  },
  {
    "id": 3,
    "name": "Kebeb w bułce",
    "isAvailable": true,
    "description": "Chrupiąca bułka z dodatkiem kebabu drobiowego, kapusty pekińskiej, pomidora, ogórka zielonego",
    "type": "fastfood",
    "price": 13.90
  },
  {
    "id": 4,
    "name": "Spagetti Bolognese",
    "isAvailable": false,
    "description": "Sos boloński",
    "type": "pasta",
    "price": 14
  },
  {
    "id": 5,
    "name": "Spagetti Siciliana",
    "isAvailable": true,
    "description": "Sos boloński z szynką i kukurydzą",
    "type": "pasta",
    "price": 17.50
  },
  {
    "id": 6,
    "name": "Pepsi",
    "isAvailable": true,
    "description": "Zimna pepsi z bąbelkami",
    "type": "drink",
    "price": 7.50
  },
  {
    "id": 7,
    "name": "Coca-cola",
    "isAvailable": true,
    "description": "Klasyczna coca-cola z lodem",
    "type": "drink",
    "price": 7.49
  }
];
