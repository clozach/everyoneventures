<script>
  import PicLink from "./PicLink.svelte";

  export let worlds;
</script>

<style>
  .route-animation-container {
    margin-top: 10vh;
  }
</style>

<div class="route-animation-container">
  {#each worlds as d}
    <PicLink
      title={d.title}
      imageURL={d.image}
      description={d.description}
      targetURL={d.targetURL} />
  {/each}
</div>
