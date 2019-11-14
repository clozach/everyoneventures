<style>
  h1 {
    margin: 0 auto;
    display: table;
    background-color: salmon;
    border-radius: 10px;
    padding: 1rem;
  }

  .fullscreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .placeholder {
    width: 100%;
    height: 100%;
    background-color: darkmagenta;
  }
</style>

<div class="fullscreen">
  <slot>
    <div class="placeholder">
      <h1>This is full screen!</h1>
    </div>
  </slot>
</div>
