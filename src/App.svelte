<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./routing/Home.svelte";
  import EditTodo from "./routing/EditTodo.svelte";
  import NewTodo from "./routing/NewTodo.svelte";
  export let url = "";
</script>

<Router {url}>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="navbar-start">
      <Link to="/" class="btn btn-ghost text-xl">todo-app</Link>
    </div>
    <div class="navbar-end">
      <Link to="/todo" class="btn">crear</Link>
    </div>
  </div>
  <div class="lg:container mx-auto py-2 px-2">
    <Route path="/" component={Home} />
    <Route path="todo/:id" let:params>
      <EditTodo id={params.id} />
    </Route>
    <Route path="/todo" component={NewTodo} />
  </div>
</Router>
