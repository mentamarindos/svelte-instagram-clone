<script>
    import MockupPhone from "@/components/mockupPhone.svelte";
</script>

<!-- html  --> 
<main class="grid mt-10 pt-5 place-items-center">
    <h1 class="m-3">root page</h1>
    <MockupPhone />

    <nav class="card p-2 m-4">
        <a href="/login">Login</a>
        <a href="/login">Signup</a>
    </nav>
</main>