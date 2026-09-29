export type Task = { id: number; title: string; done: boolean; dueDate?: string };

// 1. title parametresine tür ekledik (title: string)
// 2. done değerini string "false" yerine boolean false yaptık
export function addTask(tasks: Task[], title: string): Task[] {
  const id = tasks.length + 1;
  return [...tasks, { id, title, done: false }];
}

// Bulunamazsa undefined dönebileceği için dönüş türünü Task | undefined yaptık
export function findTask(tasks: Task[], id: number): Task | undefined {
  return tasks.find((t) => t.id === id);
}

// dueDate opsiyonel olduğu için tanımlı mı kontrol ettik
export function daysUntilDue(task: Task): number {
  if (!task.dueDate) {
    return 0;
  }
  const due = new Date(task.dueDate);
  return Math.ceil((due.getTime() - Date.now()) / 86_400_000);
}