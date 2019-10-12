<script>
  import PicLink from "../components/PicLink.svelte";

  let data = [
    {
      title: "Ouroboros",
      image: "ouroboros.png",
      description: "3 dragon-like serpents eating each other's tails",
      targetURL: "ouroboros"
    },
    {
      title: "🎈Billow 🎈",
      image: "billow-logo.png",
      description: "Red balloon",
      targetURL: "http://google.com"
    }
  ];
</script>

<style>
  .route-animation-container {
    margin-top: 10vh;
  }
</style>

<div class="route-animation-container">
  {#each data as d}
    <PicLink
      title={d.title}
      imageURL={d.image}
      description={d.description}
      targetURL={d.targetURL} />
  {/each}
</div>
