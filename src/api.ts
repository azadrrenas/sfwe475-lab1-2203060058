import { TaskSchema, type Task } from "./schemas";

export async function fetchTodo(id: number): Promise<Task | null> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    // API'den gelen veriyi doğrulama (Boundary Validation)
    const result = TaskSchema.safeParse(data);
    if (!result.success) {
      console.log("API response validation failed:", result.error.flatten());
      return null;
    }

    return result.data;
  } catch (error) {
    return null;
  }
}