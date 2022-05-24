import { ITodo } from "../@types";

export const data: ITodo[] = [
  {
    id: 1,
    text: "Go for food",
    isCompleted: false,
    isToday: true,
    hour: new Date().getHours(),
  },
  {
    id: 2,
    text: "Go for walk",
    isCompleted: true,
    isToday: true,
    hour: new Date().getHours(),
  },
  {
    id: 3,
    text: "Go for gym",
    isCompleted: false,
    isToday: false,
    hour: new Date().getHours(),
  },
];
