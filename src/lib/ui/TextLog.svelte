<script lang="ts">
    export let items = [
        "You have not caught any fish."
    ]

    export const submit = (text: string) => items = [...items, text]
</script>

<div class="text-log">
    {#each items as item}
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
    }
</style>