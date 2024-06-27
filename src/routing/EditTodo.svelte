<script>
    import { navigate } from "svelte-routing";
   import TodoForm from "../components/TodoForm.svelte";
   import { bodyTodo, getTodo, URL_BACK } from "../utils/fetchTodo";

   export let id;

   let resp = getTodo(`${URL_BACK}/api/todo/${id}`)

   async function dispacht(todo){
      const resp = await bodyTodo(`${URL_BACK}/api/todo`,"PUT",todo)
      alert(resp.message)
      navigate("/")
   }
</script>


<div>
   {#await resp}
      ...loading
   {:then todo} 
      <TodoForm {todo} {dispacht} />
   {/await}
</div>

