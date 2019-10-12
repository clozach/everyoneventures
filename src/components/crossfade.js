import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';
const [send, receive] = crossfade({
  fallback(node) { // 2nd arg would be params, but we don't use that here.
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      duration: 600,
      easing: quintOut,
      css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
    };
  },
  delay: 0,
  duration: d => Math.sqrt(d * 300),
  easing: quintOut,
});

export { send, receive };
