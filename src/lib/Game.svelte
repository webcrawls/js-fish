<script lang="ts">
    import Inventory from "$lib/Inventory.svelte";
    import Panel from "$lib/Panel.svelte";
    import './reset.css'
    import {types} from "$lib/game.js";

    let inventory = []

    const fish = () => {
        inventory = [...inventory, pickType().name]
    }
    const sell = (i) => {}

    const pickType = () => {
        const v = Object.values(types)
        const c = v.length
        const i = Math.floor(Math.random() * (c - 1))
        return v[i]
    }
</script>

<section class="game">
    <div class="game-inner">
        <Panel caught="{inventory.length}" cash="{0}"
               on:fish={fish}
               on:sell={sell}/>
        <Inventory {inventory}/>
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
        height: 6rem;
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