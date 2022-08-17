<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";

  
const config = {
  urlTransform: {
    apply: url => `/${url}`, //external URL
    remove: url => url.replace('/', ''), //internal URL
  },
  useHash: true
}
</script>

<!-- html  --> 
<Router {config} {routes} />