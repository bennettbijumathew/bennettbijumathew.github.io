<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import PageNav from '$lib/components/page-nav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<PageNav/>

{@render children()}