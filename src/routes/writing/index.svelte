<script>
  // ██╗    ██╗██████╗ ██╗████████╗██╗███╗   ██╗ ██████╗
  // ██║    ██║██╔══██╗██║╚══██╔══╝██║████╗  ██║██╔════╝
  // ██║ █╗ ██║██████╔╝██║   ██║   ██║██╔██╗ ██║██║  ███╗
  // ██║███╗██║██╔══██╗██║   ██║   ██║██║╚██╗██║██║   ██║
  // ╚███╔███╔╝██║  ██║██║   ██║   ██║██║ ╚████║╚██████╔╝
  //  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝

  import PicLink from "../../components/PicLink.svelte";
  import { worlds } from "../Model.js";
</script>

<style>
  .route-animation-container {
    margin-top: 10vh;
  }
</style>

<div class="route-animation-container">
  {#each worlds.writing as d}
    <PicLink
      title={d.title}
      imageURL={d.image}
      description={d.description}
      targetURL={d.targetURL} />
  {/each}
</div>
