<script>
  import { onMount, onDestroy } from "svelte";
  import { navType, navTypes } from "../../../components/Nav.svelte";

  onMount(() => ($navType = navTypes.projects));
  onDestroy(() => ($navType = navTypes.top));
</script>

<svelte:head>
  <title>billow</title>
</svelte:head>

<slot />
