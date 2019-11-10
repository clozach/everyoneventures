<script>
  // ____ _  _ ____ ____ ___  ____ ____ ____ ____
  // |  | |  | |__/ |  | |__] |  | |__/ |  | [__
  // |__| |__| |  \ |__| |__] |__| |  \ |__| ___]

  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import Mousetrap from "mousetrap";
  import TweenMax from "gsap";
  import { send, receive } from "../../../components/crossfade.js";
  import { isUnprintable } from "../../../components/unprintable-unicode.js";
  import { typewriter } from "../../../components/typewriter-transition.js";
  import { worlds } from "../../Model.js";

  const model = worlds[1]; // A bit hacky. Got a better idea? 😬
  const lcTitle = model.title.toLowerCase();

  let showText = false;
  let keydownText = "";

  let displayResetTimeout;
  const keydownHandler = event => {
    const key = event.key;

    if (key === "Escape") {
      showText = false;
      keydownText = "";
      return;
    }

    if (isUnprintable.test(key)) return;

    keydownText = keydownText + key;

    clearTimeout(displayResetTimeout);
    displayResetTimeout = setTimeout(() => {
      keydownText = "";
    }, 1000);
  };
  const displayAndResetKeyPresses = () => {
    document.addEventListener("keydown", keydownHandler);
  };

  let stopKeyPresses = () =>
    document.removeEventListener("keydown", keydownHandler);

  // Also worth considering: https://dmauro.github.io/Keypress/
  // (larger, but with interesting extensions)
  Mousetrap.bind(["o u r o b o r o s", "O u r o b o r o s"], (foo, bar) => {
    showText = true;
  });

  onMount(displayAndResetKeyPresses);
  onDestroy(stopKeyPresses);
  afterUpdate(() => {
    setTimeout(() => {
      TweenMax.to("#logo", 360, {
        rotation: -360,
        ease: Linear.easeNone,
        repeat: -1
      });
    }, 1000);
  });
</script>

<style>
  img {
    width: 4rem;
    position: relative;
    top: 4rem;
    filter: grayscale();
  }

  h1 {
    font-size: 4rem;
    position: relative;
    left: 4.5rem;
  }

  .shrinkwrap {
    width: fit-content;
  }
</style>

<div class="route-animation-container">
  <a href="/" on:click={() => TweenMax.to('#logo', 0, { rotation: 0 })}>
    <div class="shrinkwrap">
      <img
        id="logo"
        in:receive={{ key: `img${lcTitle}` }}
        out:send={{ key: `img${lcTitle}` }}
        src={model.image}
        alt={model.description} />
      <h1
        out:send={{ key: `title${lcTitle}` }}
        in:receive={{ key: `title${lcTitle}` }}>
        {model.title}
      </h1>
    </div>
  </a>
  <h2 in:typewriter={{ delay: 800, speed: 90 }} out:typewriter={{ speed: 5 }}>
    The story that tells itself
  </h2>
  {#if showText}
    <p in:typewriter={{ delay: 500, speed: 1 }} out:fade={{ duration: 100 }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </p>
  {:else if keydownText.length > 0}
    <p transition:fade>{keydownText}</p>
  {/if}
</div>
