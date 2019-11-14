<script context="module">
  let firstLaunch = true;
</script>

<script>
  import { onMount } from "svelte";
  import PicLink from "../components/PicLink.svelte";
  import EV from "../components/EVLogo.svelte";
  import Lines from "../components/TargetingLines.svelte";
  import Worlds from "../components/Worlds.svelte";
  import Fullscreen from "../components/Fullscreen.svelte";
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

  const fadeDuration = 2;

  let width;
  let height;
  let showFullText = true;
  let tl = new TimelineLite();

  tl.add("start").add(() => {
    showFullText = true;
  });

  onMount(() => {
    if (firstLaunch) {
      setTimeout(() => {
        tl.add(() => {
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
      firstLaunch = false;
    }
  });
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<Lines />

<EV {showFullText} />

<Fullscreen>
  <Worlds />
</Fullscreen>
