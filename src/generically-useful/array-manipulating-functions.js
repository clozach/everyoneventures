export const oneOf = items => {
  return items[Math.floor(Math.random() * items.length)];
}