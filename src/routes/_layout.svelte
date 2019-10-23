<script>
  // ████████╗ ██████╗ ██████╗
  // ╚══██╔══╝██╔═══██╗██╔══██╗
  //    ██║   ██║   ██║██████╔╝
  //    ██║   ██║   ██║██╔═══╝
  //    ██║   ╚██████╔╝██║
  //    ╚═╝    ╚═════╝ ╚═╝

  // ██╗      █████╗ ██╗   ██╗ ██████╗ ██╗   ██╗████████╗
  // ██║     ██╔══██╗╚██╗ ██╔╝██╔═══██╗██║   ██║╚══██╔══╝
  // ██║     ███████║ ╚████╔╝ ██║   ██║██║   ██║   ██║
  // ██║     ██╔══██║  ╚██╔╝  ██║   ██║██║   ██║   ██║
  // ███████╗██║  ██║   ██║   ╚██████╔╝╚██████╔╝   ██║
  // ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝  ╚═════╝    ╚═╝

  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    max-width: 56em;
    background-color: white;
    height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <title>everyone.ventures</title>
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>
