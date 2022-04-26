export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  isToday: boolean;
  hour: Date;
}

export const data: Todo[] = [
  {
    id: 1,
    text: "Go for food",
    isCompleted: false,
    isToday: true,
    hour: new Date(),
  },
  {
    id: 2,
    text: "Go for walk",
    isCompleted: false,
    isToday: true,
    hour: new Date(),
  },
  {
    id: 3,
    text: "Go for gym",
    isCompleted: false,
    isToday: true,
    hour: new Date(),
  },
];
