<script>

let username = ''
let password = ''

const submitForm = () => {

    console.log(username)
    console.log(password)
}

</script>

<!-- HTML  --> 
<main>

    <form on:submit|preventDefault="{submitForm}">

        <div class="form-control w-full max-w-xs">
         
            <input type="text" placeholder="Type your username" bind:value="{username}"
            class="input input-bordered w-full max-w-xs" />

            <input type="password" placeholder="Type your password" bind:value="{password}"
            class="input input-bordered w-full max-w-xs mt-3" />

            <button class="my-5">Login</button>

        </div>

    </form>


</main>