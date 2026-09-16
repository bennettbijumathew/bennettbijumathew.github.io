<script lang="ts">
    import testImage from "$lib/assets/test.jpg"
    import { routes, type Route } from "$lib/components/routes";

    const homeRoutes = [routes["skills"], routes["portfolio"], routes["volunteering"], routes["work"], routes["contact"]]
</script>

<!-- This is a component tiles that is a link to the pages -->
<!-- On hover of these tiles, a colored border appears with a brief description of the page -->
{#snippet PageTile(route: Route)}
    <a 
        href={route.link}
        class=" 
            relative
            flex flex-1 flex-col group
            w-100
            bg-{route.mainColor} 
            p-0 hover:p-5
            transition-all duration-500 ease-out
            cursor-pointer
        "
    >   
        <!-- The image related to the route -->
        <img
            src={route.image === undefined ? testImage : route.image}
            alt="test"
            class="
                flex-1 
                object-cover transition-transform duration-500 ease-out
            "
        />

        <!-- A little title that only appears when item is not hovered. -->
        <div class="
            bg-{route.mainColor} absolute m-2 bottom-0 rounded-full px-1.5
            opacity-100 group-hover:opacity-0
            transition-transform duration-2000
        ">
            <h1 class="
                relative
                font-instrument text-2xl italic
            ">
                {route.name}
            </h1>
        </div>

        <!-- The content section that appears on hovering the image -->
        <div class="
            grid grid-rows-[0fr] group-hover:grid-rows-[1fr]
            opacity-0 group-hover:opacity-100
            transition-[grid-template-rows,opacity] duration-500 ease-out
        ">
            <div class="overflow-hidden">
                <h1 class="
                    pt-5
                    font-instrument text-3xl italic
                ">
                    {route.name}
                </h1>

                <p class="font-instrument">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
        </div>
    </a>
{/snippet}

<!-- This shows a list of links related to the page. -->
<section class="flex-1 flex flex-row">
    {#each homeRoutes as route}
        {@render PageTile(route)}
    {/each}
</section>