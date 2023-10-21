import {derived, type Readable, type Writable, writable} from "svelte/store";
import {localStore} from "$lib/stores/local";
import type {Fish} from "$lib/game/game.js";

export type InventoryItem = {count: number, name: number}

export const items: Writable<InventoryItem[]> = localStore("fishing:items", {})
export const count: Readable<number> = derived(items, i => Object.values(i).map(v => v.count).reduce((i, a) => i + a, 0))
export const pickType = (types) => {
    const v = Object.values(types)
    const c = v.length
    const i = Math.floor(Math.random() * (c - 1))
    return v[i]
}
