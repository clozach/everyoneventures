<script>
  const lh = 3.5; // Line Height sets the intersection point that I'll use to target PicLink placements. Can't think of a better name for this right now. 🤔
  const lineStroke = 2;
  const lineColor = "white";

  let width;
  let height;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

{#if width}
  <svg width="100%" height="100%" style="position:absolute; top:0;">
    <line
      x1="0"
      x2={width}
      y1="0"
      y2={height}
      stroke={lineColor}
      stroke-width={lineStroke} />
    <line
      x1="0"
      x2={width}
      y1={height}
      y2="0"
      stroke={lineColor}
      stroke-width={lineStroke} />
    <line
      x1="0"
      x2={width}
      y1={height / lh}
      y2={height / lh}
      stroke={lineColor}
      stroke-width={lineStroke} />
    <line
      x1="0"
      x2={width}
      y1={height - height / lh}
      y2={height - height / lh}
      stroke={lineColor}
      stroke-width={lineStroke} />
    <line
      x1={width / lh}
      x2={width / lh}
      y1="0"
      y2={height}
      stroke={lineColor}
      stroke-width={lineStroke} />
    <line
      x1={width - width / lh}
      x2={width - width / lh}
      y1="0"
      y2={height}
      stroke={lineColor}
      stroke-width={lineStroke} />
  </svg>
{/if}
