<script>
  /**
   * The PicLink component presents a title with an image and
   * applies the target link to both
   */

  export let title;
  export let imageURL;
  export let description;
  export let targetURL;
</script>

<style>
  img,
  h1 {
    display: block;
    margin: 1rem auto;
  }
  h1 {
    text-align: center;
    font-size: 2.5rem;
  }
  img {
    width: 30%;
    max-width: 10rem;
    margin-top: 4vh;
  }
  a {
    text-decoration: none;
  }
</style>

<a href={targetURL}>
  <img src={imageURL} alt={description} />
  <h1>{title}</h1>
</a>
