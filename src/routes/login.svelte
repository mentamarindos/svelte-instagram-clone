<script>
  import MockupPhone from "@/components/mockupPhone.svelte"; 
  import LoginForm from "@/components/LoginForm.svelte"; 

</script>

<!-- html  --> 
<div class="container w-full h-screen m-0">

  <div class="grid grid-cols-2 gap-4 h-screen w-screen place-items-center">

    <div>
      <MockupPhone/> 
    </div>
    <!-- ... --> 
    <div class="bg-cover
    grid
    h-screen w-full
    place-items-center" 
    style="background-image: url('https://picsum.photos/1000/?blur')">

      <LoginForm />

    </div>

  </div>

</div>