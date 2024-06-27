<script>
   export let todo = {user_id:1}
   export let dispacht


   function handleDispatch(todo) {
      if(!todo?.title || !todo?.state || !todo?.description) {
         alert("rellene todos los campos")
         return
      }

      dispacht(todo)
   }
</script>

<div class="flex flex-col sm:flex-row sm:justify-center w-full gap-1">
   <input type="text" placeholder="Title" class="input input-bordered w-full md:w-1/2" bind:value={todo.title} />
   <input type="text" placeholder="description" class="input input-bordered w-full md:w-1/2" bind:value={todo.description} />
   <select class="select select-bordered w-full md:w-1/2" bind:value={todo.state}>
      <option disabled selected value="">selecciona un estado</option>
      <option>pending</option>
      <option>doing</option>
      <option>done</option>
    </select>
   <button class="btn md:w-1/4 lg:w-2/12" on:click={()=> {handleDispatch(todo)}}>enviar</button>
</div>