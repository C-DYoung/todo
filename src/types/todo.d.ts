// 파일명.d.ts 로 설정할 경우 따로 import 없이 해당 타입 사용가능.

interface ITodoItemContent {
  content: string; // todo의 내용 확인용
}

interface ITodoItem extends ITodoItemContent {
  id: string; // id의 타입
  completed: boolean; // todo 확인용
  editing: boolean; // todo의 수정상태 확인
}
