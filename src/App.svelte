<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";

  
const config = {
  urlTransform: {
    apply: url => `/my-base${url}`, //external URL
    remove: url => url.replace('/my-base', ''), //internal URL
  },
  useHash: true
}

</script>

<Router 
{config}
{routes} 
/>