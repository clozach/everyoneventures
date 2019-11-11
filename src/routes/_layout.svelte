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
    background-color: hsla(219, 100%, 97%, 1);
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
