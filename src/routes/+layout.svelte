<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>


<div class="flex flex-col flex-1">
    <div class="border p-4 flex justify-between">
        <a href="/"> Bennett Biju Mathew </a>

        <nav class="flex gap-x-2">
            <a href="/skills"> Skills </a>
            <a href="/portfolio"> Portfolio </a>
            <a href="/volunteering"> Volunteering </a>
            <a href="/work"> Work </a>
            <a href="/contact"> Contact </a>
        </nav>
    </div>

    {@render children()}
</div>
