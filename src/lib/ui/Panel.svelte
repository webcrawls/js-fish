<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import TextLog from "$lib/ui/TextLog.svelte";
    import Control from "$lib/ui/Control.svelte";

    export let caught: number = 0
    export let cash: number = 0

    const dispatch = createEventDispatcher()
</script>

<div class="panel">
    <TextLog/>
    <Control on:fish on:sell {caught} {cash}/>
</div>

<style>
    .panel {
        flex: 3 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
