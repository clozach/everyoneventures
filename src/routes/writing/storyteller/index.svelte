<script>
  // ____ ___ ____ ____ _   _ ___ ____ _    _    ____ ____
  // [__   |  |  | |__/  \_/   |  |___ |    |    |___ |__/
  // ___]  |  |__| |  \   |    |  |___ |___ |___ |___ |  \

  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import Mousetrap from "mousetrap";
  import TweenMax from "gsap";
  import { send, receive } from "../../../components/crossfade.js";
  import { isUnprintable } from "../../../components/unprintable-unicode.js";
  import { typewriter } from "../../../components/typewriter-transition.js";
  import { oneOf } from "../../../generically-useful/array-manipulating-functions.js";
  import { worlds } from "../../Model.js";

  const model = worlds[0]; // A bit hacky. Got a better idea? 😬
  const lcTitle = model.title.toLowerCase();
  const pronouncement =
    oneOf([
      "I",
      "He",
      "She",
      "They",
      "That",
      "It",
      "You",
      "They",
      "Seh",
      "We"
    ]) + " did it!";

  let initialText = "";
  let keydownText = "";

  let displayResetTimeout;
  const keydownHandler = event => {
    const key = event.key;

    if (key === "Escape") {
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
  Mousetrap.bind(["d o t", "D o t"], () => {
    initialText =
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  });

  onMount(displayAndResetKeyPresses);
  onDestroy(stopKeyPresses);
  afterUpdate(() => {
    setTimeout(() => {
      TweenMax.to("#logo", 360, {
        rotation: 360,
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
    {pronouncement}
  </h2>
  {#if keydownText.length === 0}
    <p in:typewriter={{ delay: 500, speed: 1 }} out:fade={{ duration: 100 }}>
      {initialText}
    </p>
  {:else}
    <p transition:fade>{keydownText}</p>
  {/if}
</div>
