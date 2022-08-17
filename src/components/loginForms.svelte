<script>

let logoURL = 'https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png';
let username = '', password = '';

function submitForm () {
    console.log(username) 
    console.log(password) 
}
</script>


<!-- html  -->
<div>
<div class="card w-96 glass shadow-sm"> 

    <div class="card-body items-center text-center">
        <img src='{logoURL}' alt="logo">

        <form on:submit|preventDefault="{submitForm}">
            <div class="form-control w-full max-w-xs">
                <input type="text" placeholder="username" bind:value="{username}"
                class="input input-bordered w-full max-w-xs" />

                <input type="password" placeholder="password" bind:value="{password}"
                class="input input-bordered w-full max-w-xs mt-3" />

                <button class="my-3 text-slate-900 btn btn-sm btn-ghost"> Entrar </button> 
            </div>
        </form>

    </div>
</div>

<pre class="grid place-items-center mt-2">
    <a href="/signup" class="text-slate-200 btn btn-sm btn-active">¿No tienes una cuenta? Regístrate</a>
</pre>
</div>