// 파일명.d.ts 로 설정할 경우 따로 import 없이 해당 타입 사용가능.

interface ITodoItemContent {
  content: string;
}

interface ITodoItem extends ITodoItemContent {
  id: string;
  completed: boolean;
  content: string;
  editing: boolean;
}
