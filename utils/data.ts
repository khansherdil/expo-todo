import { ITodo } from "../@types";

export const data: ITodo[] = [
  {
    id: 1,
    text: "Go for food",
    isCompleted: true,
    isToday: true,
    hour: "11:00",
  },
  {
    id: 2,
    text: "Go for walk",
    isCompleted: true,
    isToday: true,
    hour: "12:00",
  },
  {
    id: 3,
    text: "Go for gym",
    isCompleted: false,
    isToday: false,
    hour: "14:20",
  },
  {
    id: 4,
    text: "Go for shopping",
    isCompleted: true,
    isToday: true,
    hour: "14:20",
  },
  {
    id: 5,
    text: "Go for eating",
    isCompleted: false,
    isToday: true,
    hour: "14:20",
  },
  {
    id: 6,
    text: "Go for a drive",
    isCompleted: false,
    isToday: false,
    hour: "14:20",
  },
];
