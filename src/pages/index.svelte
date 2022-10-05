<script>
import MockupPhone from "@/components/misc/mockupPhone.svelte";
import { url } from "@roxi/routify";
    
let picture = 'https://i.pinimg.com/originals/38/2a/25/382a257e82075d16cec2a597b4ad6f23.gif';

</script>

<!-- template  --> 
<main class="grid mt-10 pt-5 place-items-center"> 

    <div>
        <img src={picture} alt="meme">
    </div>

    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body grid place-content-center">
            <h3 class="text-xl">Nav menu</h3>
            <a href={$url('/login')} >Login</a>
            <a href={$url('/signup')} >Signup</a>
        </div>
    </div>

</main>