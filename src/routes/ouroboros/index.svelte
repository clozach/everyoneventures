<script>
  import { fade } from "svelte/transition";
  import Mousetrap from "mousetrap";
  import { send, receive } from "../../components/crossfade.js";
  import { isUnprintable } from "../../components/unprintable-unicode.js";

  const title = "ouroboros";
  let showText = false;

  function typewriter(node, { speed = 50, delay = 0 }) {
    const valid =
      node.childNodes.length === 1 && node.childNodes[0].nodeType === 3;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      delay,
      duration,
      tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }

  let displayResetTimeout;
  const displayAndResetKeyPresses = () => {
    document.addEventListener("keydown", event => {
      const display = document.getElementById("keytext");
      const key = event.key;

      if (!display) return;
      if (isUnprintable.test(key)) return;

      keytext.innerHTML = keytext.innerHTML + key;

      clearTimeout(displayResetTimeout);
      displayResetTimeout = setTimeout(() => {
        keytext.innerHTML = "";
      }, 1000);
    });
  };
  displayAndResetKeyPresses();

  // Also worth considering: https://dmauro.github.io/Keypress/
  // (larger, but with interesting extensions)
  Mousetrap.bind(["o u r o b o r o s", "O u r o b o r o s"], (foo, bar) => {
    showText = true;
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

  .route-animation-container {
    margin-left: 6rem;
  }
</style>

<div class="route-animation-container">
  <a href="projects">
    <div class="shrinkwrap">
      <img
        in:receive={{ key: `img${title}` }}
        out:send={{ key: `img${title}` }}
        src="ouroboros.png"
        alt="Ourobodammitduplication!!! I need a plan" />
      <h1
        out:send={{ key: `title${title}` }}
        in:receive={{ key: `title${title}` }}>
        Ouroboros
      </h1>
    </div>
  </a>
  <h2 in:typewriter={{ delay: 800, speed: 90 }} out:typewriter={{ speed: 5 }}>
    The story that tells itself
  </h2>
  {#if showText}
    <p in:typewriter={{ speed: 1 }} out:fade={{ duration: 100 }}>
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
  {:else}
    <p id="keytext" />
  {/if}
</div>
