<script>
  import { navigate } from "svelte-routing";
  import Todo from "../components/Todo.svelte";
  import { getTodo, URL_BACK } from "../utils/fetchTodo";

  let todoSearch = "";

  let data = getTodo(
    `${URL_BACK}/api/todo`,
  );

  async function deleteTodoDispacht(todo) {
    const canDelete = confirm(`desea borrar la tarea ${todo.title} ?`);
    if (!canDelete) {
      return;
    }

    const resp = await getTodo(
      `${URL_BACK}/api/todo/${todo.id}`,
      "DELETE",
    );

    alert(resp);
    data = await getTodo(
      `${URL_BACK}/api/todo`,
    );
  }

  async function updateTodoDispacht(todo) {
    navigate(`/todo/${todo.id}`);
  }
  /**
   * @param {string}title
   */
  async function buscarTarea(title) {
    if (!title) {
      data = await getTodo(
        `${URL_BACK}/api/todo`,
      );
    }
    const todos = await data;
    data = todos.filter((t) => t.title.includes(title));
    todoSearch = ""
  }

  function handleEnter(e) {
    if(e.code === "Enter") {
      buscarTarea(todoSearch)
    }
  }
</script>

<div>
  {#await data}
    ...loading
  {:then todos}
    <div class="grid grid-cols-1 gap-1 px-1">
      <div class="flex justify-center gap-1 m-2">
        <input
          type="text"
          class="input input-bordered"
          placeholder="tarea"
          bind:value={todoSearch}
          on:keydown={handleEnter}
        />
        <button
        class="btn"
          on:click={() => {
            buscarTarea(todoSearch);
          }}>buscar</button
        >
      </div>
      {#each todos as todo}
        <Todo {todo} {updateTodoDispacht} {deleteTodoDispacht} />
      {/each}
    </div>
  {/await}
</div>
