# normal-fishing-game

A normal fishing game "demo" using Svelte.

## Usage

This package is intended to be consumed by other Svelte/SvelteKit projects.

### Running the Demo Site

1. clone the repository
2. `npm install` dependencies
3. `npm run dev` in a terminal and visit the provided URL

### Using the Package Locally

1. clone the repository
2. `npm install` dependencies
3. `npm link` to use this package across your local npm installation
4. import the game:

```sveltehtml
import { Game } from 'fishing'

<!-- somewhere in your markup -->
<Game/>
```