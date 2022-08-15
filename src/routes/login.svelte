<script>

  import MockupPhone from "@/components/mockupPhone.svelte"; 
  import LoginForm from "@/components/LoginForm.svelte"; 

</script>

<!-- html  --> 
<div class="container mx-auto">

  <div class="grid grid-cols-2 gap-4 h-screen place-items-center">
    <div>
      <MockupPhone/>
    </div>
    <!-- ... -->
    <div>
      <LoginForm />
    </div>
  </div>

</div>