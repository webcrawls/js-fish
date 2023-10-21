import {derived, readable, type Readable, type Writable, writable} from "svelte/store";
import {SvelteComponent} from "svelte";
import {items} from "$lib/game/inventory";

export interface CardInfo {
    id: number
    content: typeof SvelteComponent,
    props: object
}

export const card: Readable<CardInfo[]> = (() => {
    let counter: number = 0
    const {set, update, subscribe} = writable([]) as Writable<CardInfo[]>

    const add = (content, props) => {
        update(value => ([...value, { id: counter, content, props}]))
        counter = counter + 1
    }
    const remove = (id: number) => {
        update(value => value.filter(a => a.id === id))
    }

    return {subscribe, add, remove}
})()

export const log: Writable<string[]> = writable(["Waiting for action..."])
export const showRod: Writable<string[]> = writable([])