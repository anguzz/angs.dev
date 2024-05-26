<script>
 
  import { bio, name } from '$lib/info.js';
  import Bio from '$lib/components/Bio.svelte';

  let skills = [
    {
      title: "IT specialist II ",
      companyName: "Niagara Bottling",
      date: "2023-current",  
      details: [
        { category: "Skills", content: "Active directory, Entra, Oracle, Cisco, MS SQL, Sophos" },
        { category: "Languages", content: "Python, Powershell, SQL" },
      ]
    },
    {
      title: "Database Admin Intern",
      companyName: "Ingram Micro",
      date: "Summer 2022",
      details: [
        { category: "Skills", content: "Oracle 19c, SSH, Linux" },
        { category: "Languages", content: "SQL, Bash" },
      ]
    },
    {
      title: "Web developer",
      companyName: "db&m Media, Inc.",
      date: "2021",  
      details: [
        { category: "Framework", content: "Wordpress" },
        { category: "Languages", content: "HTML, CSS, JS" },
      ]
    },
   
    
  ];
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<Bio />
<section class="w-full">
  <ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mb-12">
    {#each skills as skill}
      <li class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 class="flex text-lg font-semibold text-zinc-700 dark:text-zinc-100">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="h-6 w-6 flex-none"
          >
            <path
              d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
              d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
              class="stroke-zinc-400 dark:stroke-zinc-500"
            />
          </svg>
          <span class="ml-3">{skill.title}</span>
        </h2>
        <div class="text-xs text-gray-500 dark:text-gray-400">{skill.companyName}</div>
        <div class="text-xs text-gray-400 dark:text-gray-500">{skill.date}</div>
        {#each skill.details as detail}
          <h4 class="text-sm mt-5 mb-2 font-semibold text-blue-700">{detail.category}</h4>
          <p class="mb-5 dark:text-zinc-50 text-gray-500">{detail.content}</p>
        {/each}
      </li>
    {/each}
  </ul>
</section>

