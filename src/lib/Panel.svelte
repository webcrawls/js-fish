<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let caught: number = 0
    export let cash: number = 0

    const dispatch = createEventDispatcher()
</script>

<div class="panel">
    <div class="row">
        <p class="game-text">You have not caught any fish.</p>
    </div>
    <div class="row">
        <button on:click={() => dispatch("fish")}>Fish</button>
        <button on:click={() => dispatch("sell")}>Sell</button>
        <p>🐟 {caught}</p>
        <p>💲 {cash}</p>
    </div>
</div>

<style>
    .panel {
        flex: 3 1;
        display: flex;
        padding: 7.5px;
        flex-direction: column;
        justify-content: space-between;
    }

    .row {
        display: flex;
        gap: 16px;
        justify-content: space-between;
        padding-inline: 12px;
    }

    button {
        padding-inline: 0.5rem;
    }

    .game-text {
        font-family: monospace;
    }
</style>
