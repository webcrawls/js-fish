<script lang="ts">
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher()
    export let caught = 0
    export let cash = 0
</script>
<div class="row">
    <div class="section">
        <p>🐟 {caught}</p>
        <button on:click={() => dispatch("fish")}>Fish</button>
    </div>
    <div class="section">
        <button on:click={() => dispatch("sell")}>Sell</button>
        <p>💲 {cash}</p>
    </div>
</div>

<style>
    .row {
        display: flex;
        gap: 16px;
        padding: 0.5rem;
        justify-content: space-between;
        padding-inline: 12px;
    }

    button {
        padding-inline: 0.5rem;
    }
</style>