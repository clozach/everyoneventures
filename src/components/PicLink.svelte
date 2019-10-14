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
  img {
    width: 30%;
  }

  h3 {
    font-size: 2.5rem;
  }

  .positioner {
    width: fit-content;
    text-align: center;
    margin: 0 auto;
  }
</style>

<a href={targetURL}>
  <div class="positioner">
    <img
      in:receive={{ key: `img${title.toLowerCase()}` }}
      out:send={{ key: `img${title.toLowerCase()}` }}
      src={imageURL}
      alt={description} />
  </div>

  <div class="centerer">
    <div class="positioner">
      <h3
        out:send={{ key: `title${title.toLowerCase()}` }}
        in:receive={{ key: `title${title.toLowerCase()}` }}>
        {title}
      </h3>
    </div>
  </div>
</a>
