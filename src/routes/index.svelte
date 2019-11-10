<script>
  import { onMount } from "svelte";
  import PicLink from "../components/PicLink.svelte";
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
  const logoDuration = 1;

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
        `#${e}, #${v}, #${everyone}, #${ventures}, #${worlds[0].id}, #${worlds[1].id}, #${worlds[2].id}, #${worlds[3].id}`,
        { transformOrigin: "50% 50%", xPercent: -50, yPercent: -50 }
      )
        .set(`#${e}`, {
          x: width / 2,
          y: height / 2
        })
        .set(`#${v}`, {
          x: width / 2,
          y: height / 2
        })
        .set(`#${everyone}`, {
          x: width / 2,
          y: height / 2
        })
        .set(`#${ventures}`, {
          x: width / 2,
          y: height / 2
        })
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
        .to(`#${everyone}`, fadeDuration, { opacity: 1 }, "start")
        .to(`#${ventures}`, fadeDuration, { opacity: 1 }, "start")
        .add("logo")
        .add(() => {
          showFullText = false;
        })
        .to(`#${everyone}`, logoDuration, { x: "+=320", opacity: 0 }, "logo")
        .to(`#${ventures}`, logoDuration, { x: "-=280", opacity: 0 }, "logo")
        .to(`#${e}`, logoDuration, { opacity: 1 }, "logo")
        .to(`#${v}`, logoDuration, { opacity: 1 }, "logo")
        .add("piclinks")
        .to("line", fadeDuration * 1, { opacity: 0 }, "piclinks")
        .to(
          `#${worlds[0].id}`,
          fadeDuration,
          {
            opacity: 1
          },
          "piclinks"
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
  h1,
  div {
    position: fixed;
    opacity: 0;
    /* margin: 0 auto; */
    /* margin-top: 45vh; */
    /*    display: table; /* Tricks the text into respecting the centering margin 🙄 */
  }

  #e {
    font-size: 5rem;
    left: -1rem;
  }

  #everyone {
    font-size: 5rem;
    left: -11.1rem;
  }

  #v {
    font-size: 4rem;
    top: 1.1rem;
    left: 0rem;
  }

  #ventures {
    font-size: 4rem;
    top: 1.1rem;
    left: 7.9rem;
  }
</style>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<Lines />

<h1 out:send={{ key: `e` }} id={e}>e</h1>
<h1 out:send={{ key: `v` }} id={v}>v</h1>

{#if showFullText}
  <h1 out:typewriter={{ speed: 30 }} id={everyone}>everyone</h1>
  <h1 out:typewriter={{ speed: 30 }} id={ventures}>ventures</h1>
{/if}

{#each worlds as world (world.id)}
  <div id={world.id}>
    <PicLink
      title={world.title}
      imageURL={world.image}
      description={world.description}
      targetURL={world.targetURL} />
  </div>
{/each}
