<script>
  export let url = "";
  
  import { Router, Link, Route } from "svelte-routing"; 
  import loginPage from "@/routes/login.svelte"; 

</script>

<!-- Router  --> 
<Router url="{url}">
    <Route path="/login" component="{loginPage}" />
    <Route path="/" component="{loginPage}" />
</Router>