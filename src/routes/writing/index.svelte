<script>
  import PicLink from "../../components/PicLink.svelte";

  let data = [
    {
      title: "TheStoryteller()",
      image: "storyteller.png",
      description: "Dragon eating its own tail.",
      targetURL: "/projects"
    },
    {
      title: "Learning in Public",
      image: "learning.svg",
      description:
        "Cloud of letters, roughly in the shape of a mammalian brain viewed from the side.",
      targetURL: "/"
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
