<script>
  let message = 'No message';
  const fetchApi = async () => {
    const raw = await fetch('/api');
    const data = await raw.json();
    message = data.msg;
  };
</script>

<main>
  <h1>Muni Chen Chen</h1>

  <div class="card">
    <button on:click={fetchApi}>Click me!</button>
    <p><b>{message}</b></p>
  </div>
</main>
