<script context="module">
  import { writable } from "svelte/store";
  export let navType = writable("topnav");
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

  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
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

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1rem 0.5rem;
    display: block;
    cursor: pointer;
  }

  .ouroboros {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 4rem;
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
    left: 2.4rem;
  }
</style>

{#if $navType === 'writing'}
  <nav>
    <div>
      <a href="/writing">
        <div
          class="e"
          in:receive={{ key: 'navwriting' }}
          out:send={{ key: 'navwriting' }}>
          e
        </div>
        <div class="v" transition:fly={flightTransition}>v</div>
      </a>
    </div>
  </nav>
{:else if $navType === 'projects'}
  <nav>
    <div>
      <a href="/projects">
        <div
          class="e"
          in:receive={{ key: 'navprojects' }}
          out:send={{ key: 'navprojects' }}>
          e
        </div>
        <div class="v" transition:fly={flightTransition}>v</div>
      </a>
    </div>
  </nav>
{:else}
  <nav>
    <ul>
      <li>
        <a
          class={segment === undefined ? 'selected' : ''}
          href="."
          transition:fly={flightTransition}>
          recent
        </a>
      </li>
      <li>
        <a
          class={segment === 'about' ? 'selected' : ''}
          href="about"
          transition:fly={flightTransition}>
          about
        </a>
      </li>
      <li>
        <a
          class={segment === 'writing' ? 'selected' : ''}
          href="writing"
          in:receive={{ key: 'navwriting' }}
          out:send={{ key: 'navwriting' }}>
          writing
        </a>
      </li>
      <li>
        <a
          class={segment === 'projects' ? 'selected' : ''}
          href="projects"
          in:receive={{ key: 'navprojects' }}
          out:send={{ key: 'navprojects' }}>
          projects
        </a>
      </li>
    </ul>
  </nav>
{/if}
