<script>
  // ██████╗ ██╗██╗     ██╗      ██████╗ ██╗    ██╗
  // ██╔══██╗██║██║     ██║     ██╔═══██╗██║    ██║
  // ██████╔╝██║██║     ██║     ██║   ██║██║ █╗ ██║
  // ██╔══██╗██║██║     ██║     ██║   ██║██║███╗██║
  // ██████╔╝██║███████╗███████╗╚██████╔╝╚███╔███╔╝
  // ╚═════╝ ╚═╝╚══════╝╚══════╝ ╚═════╝  ╚══╝╚══╝

  import { fade } from "svelte/transition";
  import { send, receive } from "../../../components/crossfade.js";
  import { typewriter } from "../../../components/typewriter-transition.js";
  import { worlds } from "../../Model.js";

  const model = worlds.projects[1]; // A bit hacky. Got a better idea? 😬
  const lcTitle = model.title.toLowerCase();
</script>

<style>
  img {
    width: 28rem;
    position: absolute;
    top: -15rem;
    right: -26rem;
    transform: rotate(-20deg);
  }

  h1 {
    font-family: "Elsie";
    font-size: 4rem;
    position: absolute;
    top: 8.5rem;
    left: 8.5rem;
  }

  h2 {
    font-family: "Lora";
    position: absolute;
    top: 14rem;
    left: 16rem;
  }

  sup {
    font-size: x-large;
    position: relative;
    top: -1rem;
    left: -4.4rem;
  }

  .shrinkwrap {
    width: fit-content;
  }

  .route-animation-container {
    background: linear-gradient(to top, #ddfdff, #6dd5fa, #2980b9);
    height: 100vh;
  }
</style>

<div class="route-animation-container" transition:fade>
  <a href="projects">
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
        🎈Billow🎈
        <sup>™</sup>
      </h1>
    </div>
  </a>
  <h2>
    <span
      in:typewriter={{ delay: 800, speed: 90 }}
      out:typewriter={{ speed: 5 }}>
      task management.
    </span>
    <span
      in:typewriter={{ delay: 3600, speed: 90 }}
      out:typewriter={{ speed: 5 }}>
      light
    </span>
  </h2>
</div>
