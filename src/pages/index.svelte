<script>

import MockupPhone from "@/components/mockupPhone.svelte";
import { url } from "@roxi/routify";
    
</script>

<!-- html  --> 
<main class="grid mt-10 pt-5 place-items-center"> 

    <h1 class="m-10 text-3xl">Welcome</h1>

    <nav class="card p-2 m-4">
        <a href={$url('/login')} >Login</a>
        <a href={$url('/signup')} >Signup</a>
    </nav>

</main>