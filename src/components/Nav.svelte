<script context="module">
  import { writable } from "svelte/store";
  export let navType = writable("top");
  export const navTypes = {
    top: "top",
    writing: "writing",
    projects: "projects"
  };
</script>

<script>
  // ████████╗ ██████╗ ██████╗     ███╗   ██╗ █████╗ ██╗   ██╗
  // ╚══██╔══╝██╔═══██╗██╔══██╗    ████╗  ██║██╔══██╗██║   ██║
  //    ██║   ██║   ██║██████╔╝    ██╔██╗ ██║███████║██║   ██║
  //    ██║   ██║   ██║██╔═══╝     ██║╚██╗██║██╔══██║╚██╗ ██╔╝
  //    ██║   ╚██████╔╝██║         ██║ ╚████║██║  ██║ ╚████╔╝
  //    ╚═╝    ╚═════╝ ╚═╝         ╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝

  import { send, receive } from "./crossfade.js";

  export let segment;

  let flightTransition = { duration: 800, x: -100, opacity: 0.0 };
</script>

<style>
  nav {
    position: fixed;
    bottom: 0;
    border: 0.2rem solid white;
    background-color: #ffffffcc;
    font-weight: 300;
    padding: 0 1em;
    z-index: 1000;
  }

  a {
    text-decoration: none;
    display: block;
    cursor: pointer;
  }

  .e {
    font-family: "Special Elite";
    font-size: 4rem;
    position: absolute;
    bottom: -0.5rem;
  }

  .v {
    font-family: "Special Elite";
    font-size: 3.3rem;
    position: absolute;
    bottom: -0.9rem;
    left: 1.8rem;
  }
</style>

{#if $navType !== 'top'}
  <nav>
    <div>
      <a href="/">
        <div class="e" in:receive={{ key: 'e' }} out:send={{ key: 'e' }}>e</div>
        <div class="v" in:receive={{ key: 'v' }} out:send={{ key: 'v' }}>v</div>
      </a>
    </div>
  </nav>
{/if}
