<script lang="ts">
    import {types} from "$lib/game";
    export let inventory: string[] = []
</script>

<div class="inventory-container">
    <div class="fish-grid">
        {#each inventory as fish}
            {@const type = types[fish]}
            {@const _ = console.log({type, fish})}
            <div class="fish">
                {#if type.isImage}
                    <img class="fish-icon" src="{type.icon}" alt="le fishe"/>
                {:else}
                    <p class="fish-icon">{type.icon}</p>
                {/if}
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
    }

    .fish-grid {
        padding: 0.25rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0.25rem;
        grid-row-gap: 0.25rem;
    }
</style>