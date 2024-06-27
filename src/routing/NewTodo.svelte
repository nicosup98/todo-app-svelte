<script>
   import TodoForm from "../components/TodoForm.svelte";
   import { bodyTodo,URL_BACK } from "../utils/fetchTodo";
   import { navigate } from "svelte-routing";

   async function dispacht(todo) {
      await bodyTodo(
         `${URL_BACK}/api/todo`,
         "POST",
         todo,
      );

      navigate("/");
   }
</script>

<div>
   <TodoForm {dispacht} />
</div>
