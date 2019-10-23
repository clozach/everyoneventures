<script>
  import { onMount, onDestroy } from "svelte";
  import { navType, navTypes } from "../../../components/Nav.svelte";

  onMount(() => ($navType = navTypes.writing));
  onDestroy(() => ($navType = navTypes.top));
</script>

<svelte:head>
  <title>LiP</title>
</svelte:head>

<slot />
