
<script>

import { Router } from "@roxi/routify";
import { routes } from "../.routify/routes";


const config = {
  useHash: true
}

</script>


<!-- html  --> 
<Router {config} {routes} />