<script>
   export let todo;
   export let deleteTodoDispacht;
   export let updateTodoDispacht;

</script>

<div class="collapse bg-base-200">
   <input
      type="checkbox"
      name={todo.title}
      bind:checked={todo.collapse}
      on:click={() => (todo.collapse = !todo.collapse)}
   />
   <div
      class={`${todo.state} collapse-title text-xl font-medium text line`}
   >
      {todo.title}
   </div>
   <div class="collapse-content">
      <p>{todo.description}</p>
      <p class={`${todo.state} text no-bg-color`}>{todo.state}</p>
      <div class="flex justify-around">
         <button
            class="btn btn-error md:btn-wide"
            on:click={() => {
               deleteTodoDispacht(todo);
            }}>borrar</button
         >
         <button
            class="btn btn-neutral md:btn-wide"
            on:click={() => {
               updateTodoDispacht(todo);
            }}>editar</button
         >
      </div>
   </div>
</div>

<style>
   .pending {
      background-color: rgb(253 224 71);

      &.text {
         color: rgb(202 138 4);
      }

      &.no-bg-color {
         background-color: transparent;
      }
   }

   .doing {
      background-color: rgb(110, 173, 239);

      &.text {
         color: rgb(3, 83, 158);
      }
      &.no-bg-color {
         background-color: transparent;
      }
   }

   .done {
      background-color: lightgreen;

      &.text {
         color: green;
      }

      &.line {
         text-decoration: black wavy line-through;
      }

      &.no-bg-color {
         background-color: transparent;
      }
   }
</style>
