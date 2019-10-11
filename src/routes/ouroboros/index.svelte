<script>
  function typewriter(node, { speed = 50, delay = 0 }) {
    const valid =
      node.childNodes.length === 1 && node.childNodes[0].nodeType === 3;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      delay,
      duration,
      tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }
</script>

<style>
  h1 {
    margin-top: 13rem;
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }
</style>

<h1>Ouroboros</h1>
<h2 in:typewriter={{ delay: 2000 }}>The story that tells itself</h2>
