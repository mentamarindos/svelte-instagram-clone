<script>
import { url } from "@roxi/routify";

// TODO: implementar lógica de recordar historial  
export let path = '/';
export let description = 'go back';

</script>

<!-- html  -->
<div class="pt-4 mt-4 mx-10">
    <a href="{$url(path)}"> {description} </a>
</div>