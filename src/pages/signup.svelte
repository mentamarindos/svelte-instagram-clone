<script>
import SignUpForm from "@/components/signUpForm.svelte";
import MockupPhone from "@/components/mockupPhone.svelte";
import { goto } from "@roxi/routify";

let bgULR = 'https://picsum.photos/1000/?blur';

</script>

<!-- html  --> 
<div class="container w-full h-screen m-0"> 

    <div class="grid 
    md:grid-cols-2 sm:grid-cols-1 
    gap-4 
    h-screen 
    w-screen 
    place-items-center"> 
  
      <div class="hidden md:flex" on:dblclick={()=> $goto('/')}>  
        <MockupPhone /> 
      </div>
      <!-- ... --> 
      <div class="bg-cover
        grid
        h-screen w-full
        place-items-center" 
        style="background-image: url({bgULR})">
  
          <SignUpForm />
      </div>
  
    </div>
  
  </div>