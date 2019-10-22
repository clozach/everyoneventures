<script>
  import { onMount, onDestroy } from "svelte";
  import { navType, navTypes } from "../../../components/Nav.svelte";

  onMount(() => ($navType = navTypes.projects));
  onDestroy(() => ($navType = navTypes.top));
</script>

<slot />
