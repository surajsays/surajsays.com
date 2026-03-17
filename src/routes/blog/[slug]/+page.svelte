<script>
let { data} = $props();
</script>
<article>
  <h1>{data.title}</h1>
  <p>{new Date(data.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <data.content/>
</article>
