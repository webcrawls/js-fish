<script lang="ts">
    import type {Fish} from "$lib/game/game.js";

    export let type: Fish
</script>

<div class="">
    <h1>{type.name}</h1>
    {#if type.description !== undefined}
        <p>{type.description}</p>
        {/if}
</div>