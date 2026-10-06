import { TaskSchema, type Task } from "./schemas";
import { addTask, findTask } from "./tasks";
import { fetchTodo } from "./api";


let tasks: Task[] = [];
tasks = addTask(tasks, "Read Chapter 1");

const task1 = findTask(tasks, 1);
if (task1) {
  console.log(task1.title);
} else {
  console.log("Task 1 is not found.");
}

const task99 = findTask(tasks, 99);
if (task99) {
  console.log(task99.title);
} else {
  console.log("Task 99 bulunamadı.");
}


console.log("\n--- Zod Schema Tests ---");
const valid = { id: 1, title: "Read", done: false };
const missingField = { id: 2, done: true };
const wrongType = { id: 3, title: "Write", done: "yes" };

for (const candidate of [valid, missingField, wrongType]) {
  const result = TaskSchema.safeParse(candidate);
  console.log(result.success, result.success ? "" : result.error.issues);
}


async function main() {
  console.log("\n--- Async Fetch Test ---");
  const todo = await fetchTodo(1);
  console.log(todo);
}

main();
import { createTask } from "./createTask";

const validPayload = { id: 1, title: "Read Chapter 1", done: false };
const missingPayload = { id: 2, done: true };
const wrongTypePayload = { id: 3, title: "Write Code", done: "yes" };

for (const payload of [validPayload, missingPayload, wrongTypePayload]) {
  const result = createTask(payload);

  if (result.ok) {
    console.log("Task created successfully:", result.task);
  } else {
    console.log("Failed to create task:", result.error);
  }
}