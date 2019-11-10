<script>
  // ██╗     ███████╗ █████╗ ██████╗ ███╗   ██╗██╗███╗   ██╗ ██████╗
  // ██║     ██╔════╝██╔══██╗██╔══██╗████╗  ██║██║████╗  ██║██╔════╝
  // ██║     █████╗  ███████║██████╔╝██╔██╗ ██║██║██╔██╗ ██║██║  ███╗
  // ██║     ██╔══╝  ██╔══██║██╔══██╗██║╚██╗██║██║██║╚██╗██║██║   ██║
  // ███████╗███████╗██║  ██║██║  ██║██║ ╚████║██║██║ ╚████║╚██████╔╝
  // ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝

  // ██╗███╗   ██╗    ██████╗ ██╗   ██╗██████╗ ██╗     ██╗ ██████╗
  // ██║████╗  ██║    ██╔══██╗██║   ██║██╔══██╗██║     ██║██╔════╝
  // ██║██╔██╗ ██║    ██████╔╝██║   ██║██████╔╝██║     ██║██║
  // ██║██║╚██╗██║    ██╔═══╝ ██║   ██║██╔══██╗██║     ██║██║
  // ██║██║ ╚████║    ██║     ╚██████╔╝██████╔╝███████╗██║╚██████╗
  // ╚═╝╚═╝  ╚═══╝    ╚═╝      ╚═════╝ ╚═════╝ ╚══════╝╚═╝ ╚═════╝

  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { send, receive } from "../../../components/crossfade.js";
  import { worlds } from "../../Model.js";

  const model = worlds[3]; // A bit hacky. Got a better idea? 😬
  const lcTitle = model.title.toLowerCase();
</script>

<style>
  img {
    width: 200vw;
    left: -50vw;
    position: fixed;
    filter: grayscale() blur(0.1rem) opacity(6%);
  }

  .positioner {
    width: fit-content;
    text-align: center;
    margin: 4rem auto 0 auto;
  }

  a {
    position: absolute;
    width: 100vw;
  }

  h1 {
    font-size: 4rem;
  }

  p:first-of-type {
    margin-top: 10rem;
  }

  p {
    padding: 0 5.5rem;
    margin: 1rem auto;
    max-width: 55rem;
  }

  .shrinkwrap {
    width: fit-content;
  }

  .route-animation-container {
    margin: 0 auto;
  }
</style>

<div class="route-animation-container">
  <img
    in:receive={{ key: `img${lcTitle}` }}
    out:send={{ key: `img${lcTitle}` }}
    src={model.image}
    alt={model.description} />
  <a href="/">
    <div class="shrinkwrap positioner">
      <h1
        out:send={{ key: `title${lcTitle}` }}
        in:receive={{ key: `title${lcTitle}` }}>
        {model.title}
      </h1>
    </div>
  </a>
  <p in:fade={{ delay: 1000 }} out:fade={{ duration: 150 }}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </p>
  <p in:fade={{ delay: 1000 }} out:fade={{ duration: 150 }}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </p>
  <p in:fade={{ delay: 1000 }} out:fade={{ duration: 150 }}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </p>
  <p in:fade={{ delay: 1000 }} out:fade={{ duration: 150 }}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </p>
</div>
