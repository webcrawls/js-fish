<script lang="ts">
    import {items} from "$lib/game/inventory";
    import {onMount} from "svelte";
    import {types, type Fish} from "$lib/game/game";
    import {card} from "$lib/game/ui.js";
    import TypeContent from "$lib/ui/TypeContent.svelte";

    let container: HTMLElement
    let hover: number = 0

    onMount(() => {
        items.subscribe(v => {
            container.scroll({ top: container.scrollHeight })
        })
    })
</script>

<div class="inventory-container">
    <div class="fish-grid" bind:this={container}>
        {#each Object.values($items) as item}
            {@const type = types[item.name]}
            <div class="fish" on:mouseover={() => hover = card.add(TypeContent, {type})} on:mouseout={() => card.remove(hover)}>
                {#if type.icon.length <= 4}
                    <p class="fish-icon">{type.icon}</p>
                {:else}
                    <img class="fish-icon" src="{type.icon}"/>
                {/if}
                <div class="count-tooltip">
                    <p>{item.count}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .inventory-container {
        background-color: #005454;
        overflow-y: auto;
        display: flex;
        justify-content: center;
        overflow-x: clip;
        scrollbar-gutter: stable;
        flex: 1 1;
        width: 100%;
        height: 100%;
    }

    .fish-grid {
        padding: 0.25rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0.25rem;
        grid-row-gap: 0.25rem;

        width: 100%;
        height: 100%;
    }

    .fish {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;
        cursor: default;
        position: relative;
    }

    p.fish-icon {
        color: white;
        font-size: 1.5rem;
    }

    img.fish-icon {
        width: 16px;
        max-width: 100%;
        height: 16px;
    }

    .fish:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }

    .count-tooltip {
        position: absolute;
        bottom: -4px;
        right: -4px;
        width: 16px;
        height: 16px;
        font-family: Verdana;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: black;
        font-size: 0.735rem;
        border-radius: 0.35rem;
    }
</style>