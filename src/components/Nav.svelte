<script>
  export let segment;
</script>

<style>
  nav {
    position: absolute;
    bottom: 0;
    border: 0.2rem solid white;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    background-color: #ffffffcc;
    font-weight: 300;
    padding: 0 1em;
    z-index: 1000;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    cursor: pointer;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">recent</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>
    <li>
      <a class={segment === 'writing' ? 'selected' : ''} href="writing">
        writing
      </a>
    </li>
    <li>
      <a class={segment === 'projects' ? 'selected' : ''} href="projects">
        projects
      </a>
    </li>
  </ul>
</nav>
