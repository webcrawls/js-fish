<script lang="ts">
    import {card} from "$lib/game/ui";

    let visible = false
    $: visible = $card.length !== 0
    export let pos: {x: number, y: number} = {x: 0, y: 0}

</script>

<div class="card" class:visible style="--pos-x: {pos.x}px; --pos-y: {pos.y}px;">
    {#if $card[0]?.content}
        <svelte:component this="{$card[0].content}" {...$card[0].props}/>
    {/if}
</div>

<style>
    .card {
        pointer-events: none;
        visibility: hidden;
        position: absolute;
        left: var(--pos-x);
        top: var(--pos-y);
        min-width: 8rem;
        height: 4rem;
        border: 4px solid beige;
        background-color: white;
        z-index: 99;
    }

    .visible {
        visibility: visible;
    }
</style>