<script>
  import PicLink from "../components/PicLink.svelte";

  let data = [
    {
      title: "Ouroboros",
      image: "ouroboros.png",
      description: "3 dragon-like serpents eating each other's tails",
      targetURL: "http://ilovelife.com"
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
  div:first-of-type {
    margin-top: 10vh;
  }
</style>

<div>
  {#each data as d}
    <PicLink
      title={d.title}
      imageURL={d.image}
      description={d.description}
      targetURL={d.targetURL} />
  {/each}
</div>
