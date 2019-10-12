<script>
  import { send, receive } from "../components/crossfade.js";

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
  <img
    in:receive={{ key: `img${title}` }}
    out:send={{ key: `img${title}` }}
    src={imageURL}
    alt={description} />
  <h1
    in:receive={{ key: `h1${title.toLowerCase()}` }}
    out:send={{ key: `h1${title.toLowerCase()}` }}>
    {title}
  </h1>
</a>
