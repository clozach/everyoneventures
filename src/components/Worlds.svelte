<script>
  import PicLink from "./PicLink.svelte";
  import { worlds } from "../routes/Model.js";
</script>

<style>
  .worlds {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 2fr 2fr 1fr;
  }

  .world-0 {
    grid-row: 2 / span 1;
    grid-column: 2 / span 1;
  }

  .world-1 {
    grid-row: 2 / span 1;
    grid-column: 4 / span 1;
  }

  .world-2 {
    grid-row: 4 / span 1;
    grid-column: 2 / span 1;
  }

  .world-3 {
    grid-row: 4 / span 1;
    grid-column: 4 / span 1;
  }
</style>

<div class="worlds">
  {#each worlds as world, i (world.id)}
    <div id={world.id} class="world world-{i}">
      <PicLink
        title={world.title}
        imageURL={world.image}
        description={world.description}
        targetURL={world.targetURL} />
    </div>
  {/each}
</div>
