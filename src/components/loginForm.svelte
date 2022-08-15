<script>
import { Link } from "svelte-routing"; 

let username = 'myusername';
let password = 'b4354y3ibsdiofhdo';

function submitForm () {
    return true
    // console.log(username) 
    // console.log(password) 
}
</script>


<div>
<div class="card w-96 glass shadow-sm"> 

    <div class="card-body items-center text-center">
        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="ghj">

        <form on:submit|preventDefault="{submitForm}">
            <div class="form-control w-full max-w-xs">
                <input type="text" placeholder="username" bind:value="{username}"
                class="input input-bordered w-full max-w-xs" />

                <input type="password" placeholder="password" bind:value="{password}"
                class="input input-bordered w-full max-w-xs mt-3" />

                <button class="my-3 btn btn-sm btn-active">Entrar</button>
            </div>
        </form>

    </div>
</div>

<pre class="grid place-items-center mt-2">
    <Link to="/signup">¿No tienes una cuenta? Regístrate</Link>
</pre>
</div>