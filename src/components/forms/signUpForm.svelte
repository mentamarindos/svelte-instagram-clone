<script>
  import { url } from "@roxi/routify";
  
  let logoURL = 'https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png';
  let email = '', password = '', fullName = '';
  
  function submitForm () {
      console.log(email) 
      console.log(password) 
  }
  </script>
  
  
  <!-- html  -->
  <div>
  <div class="card w-96 glass shadow-sm"> 
  
      <div class="card-body items-center text-center">

        <h1 class="text-slate-900 text-2xl mb-4">Register form</h1>
        
          <form on:submit|preventDefault="{submitForm}">
              <div class="form-control w-full max-w-xs">
                
                  <input type="text" placeholder="full name" bind:value="{fullName}"
                  class="input input-bordered w-full max-w-xs" />

                  <input type="text" placeholder="email" bind:value="{email}"
                  class="input input-bordered w-full max-w-xs my-4" />
  
                  <input type="password" placeholder="password" bind:value="{password}"
                  class="input input-bordered w-full max-w-xs" />
  
                  <button class="my-3 text-slate-900 btn btn-sm btn-ghost"> Register </button> 
              </div>
          </form>
  
      </div>
  </div>
  
  <pre class="grid place-items-center mt-2">
      <a href={$url('/login')} class="text-slate-200 btn btn-sm btn-active">¿Ya tienes una cuenta? Inicia sesión</a>
  </pre>
  </div>