<script>
import MockupPhone from "@/components/misc/mockupPhone.svelte";
import { url } from "@roxi/routify";
    
let picture = 'https://cutewallpaper.org/21/dancing-gif-transparent-background/Spongebob-Squarepants-Dancing-Sticker-for-iOS-Android-GIPHY.gif';

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