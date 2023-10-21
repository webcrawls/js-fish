<script lang="ts">
    import {items, count, pickType} from "$lib/game/inventory";
    import {types} from "$lib/game/game";
    import {log} from "$lib/game/ui.js";

    export let cash = 0

    export const fish = () => {
        const type = pickType(types)
        const value = $items[type.name]
        console.log({value})
        if (value === undefined) {
           $items[type.name] = {count: 1, name: type.name}
        } else {
            $items[type.name] = {count: value.count + 1, name: type.name}
        }
        console.log($items[type.name])

        $log = [...$log, type.name]
    }

    let hasPrevious: boolean = false;
    let hasNext: boolean = false;
</script>
<div class="control">
    <div class="arrow-up" class:disabled={!hasPrevious}>
        <p>↑</p>
        <p>↑</p>
    </div>
    <div class="control-inner">
        <div class="row">
            <div class="section">
                <p>🐟 {$count}</p>
                <button on:click={fish}>Fish</button>
            </div>
        </div>
    </div>
    <div class="arrow-down" class:disabled={!hasNext}>
        <p>↓</p>
        <p>↓</p>
    </div>
</div>

<style>
    .row {
        display: flex;
        gap: 16px;
        padding: 0.5rem;
        justify-content: space-between;
        padding-inline: 12px;
        font-family: Verdana;
    }

    .control {
        display: flex;
        flex-direction: row;
    }

    .control-inner {
        flex: 1 1;
    }

    .arrow-up, .arrow-down {
        background-color: #005454;
        color: #ffffb0;
        padding-inline: 0.35rem;
        font-family: monospace;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;
        cursor: pointer;
    }

    .disabled p {
        font-style: italic;
        opacity: 0.65;
    }

    button {
        padding-inline: 0.5rem;
    }
</style>