<script lang="ts">
    import {log} from "$lib/game/ui";
    import {onMount} from "svelte";

    let container: HTMLElement

    onMount(() => {
        log.subscribe(v => {
            container.scroll({ top: container.scrollHeight })
        })
    })
</script>

<div class="text-log" bind:this={container}>
    {#each $log as item}
        <p>{item}</p>
    {/each}
</div>

<style>
    .text-log {
        display: flex;
        flex-direction: column;
        background-color: #005454;
        padding: 0.5rem;
        flex: 1 1;
        color: #ffffb0;
        font-family: monospace;
        font-style: italic;
        overflow-y: scroll;
    }
</style>