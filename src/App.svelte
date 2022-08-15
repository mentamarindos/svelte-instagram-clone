<script>
  export let url = "";
  
  import { Router, Link, Route } from "svelte-routing";
  import loginPage from "./pages/login.svelte";

</script>

<!-- Router  --> 
<Router url="{url}">
    <Route path="/login" component="{loginPage}" />
    <Route path="/" component="{loginPage}" />
</Router>