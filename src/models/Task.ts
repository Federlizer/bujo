import * as dayjs from 'dayjs';

class Task {
  id?: number;
  text: string;
  date: dayjs.Dayjs;
  completed: boolean;

  constructor(text: string) {
    this.text = text;
    this.date = dayjs();
    this.completed = false;
  }
}

export default Task;
