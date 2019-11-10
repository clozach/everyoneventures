<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { send, receive } from "./crossfade.js";
  import { typewriter } from "../components/typewriter-transition.js";
  import { TimelineLite } from "gsap";

  export let showFullText;

  let width;
  let height;
  let tl = new TimelineLite();

  $: if (!showFullText) {
    // Animate "everyone" so it appears to be collapsing to the right, instead of to the left during the typewriter animation. Bit of a hack, but I think it's sufficiently convincing.

    tl.to(`#logo-everyone`, 2, { x: "+=1500", opacity: 0 });
  }
</script>

<style>
  section {
    font-family: "Special Elite";
  }

  .container {
    box-shadow: 3px 2px 12px rgba(0, 0, 0, 0.4);

    height: 100vh;
    position: relative;
  }

  #logo-e {
    font-size: 5rem;
  }

  #logo-v {
    font-size: 4rem;

    position: absolute;
    left: 1.15rem;
    top: 1.85rem;
  }

  #logo-everyone {
    font-size: 5rem;

    position: absolute;
    left: -20.4rem;
    top: 0.79rem;
  }

  #logo-ventures {
    font-size: 4rem;

    position: absolute;
    left: 1.17rem;
    top: 2.47rem;
  }

  #ev {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<section class="overlapping">
  <div class="container">
    <div id="ev">
      <div out:send={{ key: `e` }} id="logo-e">e</div>
      <div out:send={{ key: `v` }} id="logo-v">v</div>

      {#if showFullText}
        <h1 out:typewriter={{ speed: 30 }} id="logo-everyone">everyone</h1>
        <h1 out:typewriter={{ speed: 30 }} id="logo-ventures">ventures</h1>
      {/if}
    </div>
    <!-- <div id="everyone">everyone</div> -->
  </div>
</section>
