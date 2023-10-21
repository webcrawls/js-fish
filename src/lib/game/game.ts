import AngryFish from '$lib/icons/angry-fish.png'
import EvilFish from '$lib/icons/evil-fish.png'
import SmilingFish from '$lib/icons/fish-smiling.png'
import InvisibleFish from '$lib/icons/invisible-fish.png'
import LyingFish from '$lib/icons/lying-fish.png'
import StarFish from '$lib/icons/starfish.png'
import SkeletonFish from '$lib/icons/skeleton-fish.png'
import MushroomFish from '$lib/icons/mushroom-fish.png'
import RetroFish from '$lib/icons/retro-fish.png'
import GlobeFish from '$lib/icons/globe-fish.png'

export const types: Record<string, Fish> = {
    'angry-fish': { name: 'angry-fish', icon: AngryFish },
    'evil-fish': { name: 'evil-fish', icon: EvilFish },
    'fish-smiling': { name: 'fish-smiling', icon: SmilingFish },
    'invisible-fish': { name: 'invisible-fish', icon: InvisibleFish },
    'lying-fish': { name: 'lying-fish', icon: LyingFish },
    'star-fish': { name: 'star-fish', icon: StarFish },
    'pufferfish': { name: 'pufferfish',  icon: '🐡' },
    'skeleton-fish': { name: 'skeleton-fish', icon: SkeletonFish },
    'mushroom-fish': { name: 'mushroom-fish', icon: MushroomFish },
    'retro-fish': { name: 'retro-fish', icon: RetroFish },
    'globe-fish': { name: 'globe-fish', icon: GlobeFish },
    'shark': { name: 'shark', icon: '🦈', description: "Not sure how your line withstood this one." },
    'weird1': { name: 'weird1', icon: '𓆞', description: "An ancient rune holding deep mysteries" },
    'weird2': { name: 'weird2', icon: '𓆟', description: "Explorers discovered a series of cave drawings" },
    'weird3': { name: 'weird3', icon: '𓆝', description: "" },
}

export interface Fish {
    icon: string
    description?: string
    name: string
}