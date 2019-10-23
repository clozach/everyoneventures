// https://svelte.dev/docs#writable
export function typewriter(node, { speed = 50, delay = 0 }) {
  const valid =
    node.childNodes.length === 1 && node.childNodes[0].nodeType === 3;

  if (!valid) {
    console.log(
      `The "typewriter" transition only works on elements with a single text node child.`
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
