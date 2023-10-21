<script lang="ts">
    import Inventory from "$lib/ui/Inventory.svelte";
    import Panel from "$lib/ui/Panel.svelte";
    import './reset.css'
    import {setContext} from "svelte";
    import {writable} from "svelte/store";
    import InfoCard from "$lib/ui/InfoCard.svelte";
    import {card} from "$lib/game/ui";
    import {items} from "$lib/game/inventory.js";

    const mousePos = writable({x: 0, y: 0})
    setContext("mousePos", mousePos)
    $: console.log($mousePos)
</script>

<svelte:window on:mousemove={(e) => $mousePos = {x: e.clientX, y: e.clientY}}/>

<section class="game">
    <div class="game-inner">
        <InfoCard visible={$card.visible} pos="{$mousePos}"/>
        <Panel caught="{$items.length}" cash="{0}"/>
        <Inventory items={$items}/>
    </div>
</section>

<style>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .game {
        width: 100%;
        height: 8rem;
        padding: 8px;
        background-color: teal;
    }

    .game-inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        border: 4px double #00dede;
    }
</style>