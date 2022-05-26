export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
  isToday: boolean;
  hour: string;
}

//This interface represents the data passed in to our DataList component, which renders
//a list of Todo data
export interface TodoListProps {
  data: ITodo[];
}

export type RootStackParamList = {
  Home: undefined;
  Add: undefined;
};
