<script lang="ts">
    import { ArrowRight, CornerDownRight, Menu } from "@lucide/svelte";
	import { fade, fly, slide } from 'svelte/transition';
	import { page } from '$app/state';
    import { resolve } from '$app/paths';

    // Controls the state of the navigation panel being open / closed.
    let isPanelOpen = $state(false)

    function togglePanel() {
        isPanelOpen = !isPanelOpen
    }

    // List of Menu items
    type NavMenu = {
        link: string, 
        name: string,
        focusedStyle: string,
        unfocusedStyle: string
    }

    const navMenu: NavMenu[] = [
        { 
            link: resolve('/'), 
            name: 'Home', 
            focusedStyle: 'bg-purple-400', 
            unfocusedStyle: 'border border-purple-500 group-hover:bg-purple-500' 
        },
        { 
            link: resolve('/skills'), 
            name: 'Skills', 
            focusedStyle: 'bg-red-400', 
            unfocusedStyle: 'border border-red-500 group-hover:bg-red-500' 
        },
        { 
            link: resolve('/portfolio'), 
            name: 'Portfolio', 
            focusedStyle: 'bg-orange-400', 
            unfocusedStyle: 'border border-orange-500 group-hover:bg-orange-500' 
        },
        { 
            link: resolve('/volunteering'), 
            name: 'Volunteering', 
            focusedStyle: 'bg-yellow-400', 
            unfocusedStyle: 'border border-yellow-500 group-hover:bg-yellow-500' 
        },
        { 
            link: resolve('/work'), 
            name: 'Work', 
            focusedStyle: 'bg-green-400', 
            unfocusedStyle: 'border border-green-500 group-hover:bg-green-500' 
        },
        { 
            link: resolve('/contact'), 
            name: 'Contact', 
            focusedStyle: 'bg-blue-400', 
            unfocusedStyle: 'border border-blue-500 group-hover:bg-blue-500' 
        },
    ]
</script>

<header class="
    flex items-center justify-between 
    h-18 w-full 
    sticky top-0 left-0 z-20
    bg-taupe-800 text-taupe-200 
    p-4
">
    <a 
        href={resolve("/")}
        class="font-instrument text-xl"
    >
        Bennett Biju Mathew 
    </a>
    
    <button 
        class="
            bg-taupe-200 hover:bg-taupe-300 hover:cursor-pointer
            rounded-full p-2
            transition-colors
        " 
        onclick={togglePanel}
    > 
        <Menu class="
            size-4
            text-taupe-800 
        "/>
    </button>
</header>

{#if isPanelOpen == true}   
    <nav 
        class="
            flex flex-col gap-2
            h-fit w-full
            fixed top-18 z-10
            bg-taupe-800 text-taupe-200 
            pt-0 p-4
        "
        transition:slide={{ 
            axis: "y",
            duration: 500
        }}
    >
        {#each navMenu as item}
            <a 
                href={item.link}
                onclick={togglePanel}
                class="
                    flex items-center gap-x-2
                    h-12 sm:h-fit w-35 px-2 -ml-2 rounded-lg
                    hover:bg-taupe-900 
                    font-instrument text-lg 
                    group
                "
            > 
                <div class="
                    size-5 
                    rounded-full
                    flex items-center justify-center 
                    text-taupe-800 {page.url.pathname == item.link ? item.focusedStyle : item.unfocusedStyle }
                    transition-colors
                ">
                    {#if page.url.pathname == item.link}
                        <CornerDownRight class="size-3"/>
                    {:else}
                        <ArrowRight class="size-3"/>
                    {/if}
                </div>

                {item.name} 
            </a>
        {/each}
    </nav>
{/if}


