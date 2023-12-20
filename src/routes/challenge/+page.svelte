<script>
  export let data;
  console.log(data);
</script>

<article>
  <h1>hello</h1>
{#each data.challenges as challenge}
  <li><a href={`/challenge/${challenge}`}> {challenge} </a></li>
{/each}
</article>