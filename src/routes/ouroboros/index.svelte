<script>
  import { send, receive } from "../../components/crossfade.js";

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
  const title = "ouroboros";
</script>

<style>
  img {
    width: 4rem;
    position: relative;
    top: 4rem;
    filter: grayscale();
  }

  h1 {
    font-size: 4rem;
    position: relative;
    left: 4.5rem;
  }

  .positioner {
    padding: 0.1rem;
    width: fit-content;
  }

  .route-animation-container {
    margin-left: 6rem;
  }
</style>

<div class="route-animation-container">
  <a href="projects">
    <div class="positioner">
      <img
        in:receive={{ key: `img${title}` }}
        out:send={{ key: `img${title}` }}
        src="ouroboros.png"
        alt="Ourobodammitduplication!!! I need a plan" />
    </div>

    <div class="positioner">
      <h1
        out:send={{ key: `title${title}` }}
        in:receive={{ key: `title${title}` }}>
        Ouroboros
      </h1>
    </div>
  </a>
  <h2 in:typewriter={{ delay: 800, speed: 25 }} out:typewriter={{ speed: 10 }}>
    The story that tells itself
  </h2>
</div>
