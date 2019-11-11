<script>
  import { onMount } from "svelte";
  import PicLink from "../components/PicLink.svelte";
  import EV from "../components/EVLogo.svelte";
  import Lines from "../components/TargetingLines.svelte";
  import { worlds } from "./Model.js";
  import { TimelineLite } from "gsap";
  import { typewriter } from "../components/typewriter-transition.js";
  import { send, receive } from "../components/crossfade.js";

  /*
███╗   ███╗ █████╗ ██╗███╗   ██╗    ██╗███╗   ██╗██████╗ ███████╗██╗  ██╗
████╗ ████║██╔══██╗██║████╗  ██║    ██║████╗  ██║██╔══██╗██╔════╝╚██╗██╔╝
██╔████╔██║███████║██║██╔██╗ ██║    ██║██╔██╗ ██║██║  ██║█████╗   ╚███╔╝
██║╚██╔╝██║██╔══██║██║██║╚██╗██║    ██║██║╚██╗██║██║  ██║██╔══╝   ██╔██╗
██║ ╚═╝ ██║██║  ██║██║██║ ╚████║    ██║██║ ╚████║██████╔╝███████╗██╔╝ ██╗
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
*/

  const everyone = "everyone";
  const ventures = "ventures";
  const e = "e";
  const v = "v";
  const lh = 3.5; // Line Height sets the intersection point that I'll use to target PicLink placements. Can't think of a better name for this right now. 🤔
  const fadeDuration = 2;

  let width;
  let height;
  let showFullText = true;
  let tl = new TimelineLite();

  tl.add("start").add(() => {
    showFullText = true;
  });

  onMount(() => {
    setTimeout(() => {
      tl.set(
        `#${worlds[0].id}, #${worlds[1].id}, #${worlds[2].id}, #${worlds[3].id}`,
        { transformOrigin: "50% 50%", xPercent: -50, yPercent: -50 }
      )
        .set(`#${worlds[0].id}`, {
          x: width / lh,
          y: height / lh
        })
        .set(`#${worlds[1].id}`, {
          x: width - width / lh,
          y: height / lh
        })
        .set(`#${worlds[2].id}`, {
          x: width / lh,
          y: height - height / lh
        })
        .set(`#${worlds[3].id}`, {
          x: width - width / lh,
          y: height - height / lh
        })
        .add(() => {
          showFullText = false; // This triggers animation in `EV`
        })
        .add("piclinks")
        .to("svg", fadeDuration * 1, { opacity: 0 }, "piclinks")
        .to(
          `#${worlds[0].id}`,
          fadeDuration,
          {
            opacity: 1
          },
          "piclinks+=1.5"
        )
        .to(`#${worlds[1].id}`, fadeDuration, {
          opacity: 1
        })
        .to(`#${worlds[2].id}`, fadeDuration, {
          opacity: 1
        })
        .to(`#${worlds[3].id}`, fadeDuration, {
          opacity: 1
        });
    }, 1600);
  });
</script>

<style>
  .worlds {
    opacity: 1;
    position: absolute;
    top: 0;
  }

  .world {
    opacity: 0;
    position: absolute;
  }
</style>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<Lines />

<EV {showFullText} />

<div class="worlds">
  {#each worlds as world (world.id)}
    <div id={world.id} class="world">
      <PicLink
        title={world.title}
        imageURL={world.image}
        description={world.description}
        targetURL={world.targetURL} />
    </div>
  {/each}
</div>
