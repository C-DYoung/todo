export const svaeTodoData = (todoData: ITodoItem[]) => {
  localStorage.setItem('todoData', JSON.stringify(todoData));
}; // localstorage에 저장하는 함수

export const loadTodoData = (): ITodoItem[] => {
  const todoData = localStorage.getItem('todoData');
  if (todoData) {
    return JSON.parse(todoData);
  } else {
    return [];
  }
};
