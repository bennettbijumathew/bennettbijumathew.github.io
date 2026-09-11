<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import PageNav from '$lib/components/page-nav.svelte';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>


<div class="flex flex-col flex-1">
    <PageNav/>

    {@render children()}
</div>
