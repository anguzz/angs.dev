<script>
  import { navMenu } from '$lib/info'
  import { page } from '$app/stores';
  import { name } from '$lib/info'
  let toggleMenu = false;
</script>

<header class="flex items-center justify-between w-full py-4 mx-auto lg:pb-8 gap-16">
  <a
    class="text-lg font-bold sm:text-2xl text-blue-700"
    href="/"
  >
    {name} <sup></sup>
  </a>

  <div class="flex justify-around gap-2 items-center">
    <div
      class="sm:flex hidden justify-center p-1 relative sm:w-auto sm:-space-x-px overflow-hidden sm:rounded-xl"
    >
      <nav aria-label="Global">
        <!-- Navigation Placeholder -->
      </nav>
    </div>
    <div class="dropdown flex mr-2 sm:hidden gap-2">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <button on:click={()=>{toggleMenu = !toggleMenu}} class="bg-transparent">
        {#if toggleMenu}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-6 w-6 stroke-current">
          <title>Close Dropdown</title>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
        {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-6 w-6 stroke-current">
          <title>Open Dropdown</title>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        {/if}
      </button>
      <ul class={`${toggleMenu ? 'block' : 'hidden'} w-52 absolute right-8 z-50 top-16 py-2 mt-2 mr-10 bg-white rounded-lg shadow-xl`}>
        {#each navMenu as item}
        <li class="mb-2">
          <a
            on:blur={()=>{ toggleMenu = false }}
            href={item.link}
            class="inline-block px-4 py-2 text-sm rounded font-medium text-zinc-900 hover:bg-indigo-800 hover:text-white focus:relative"
          >
            {item.title}
          </a>
        </li>
        {/each}
        <li>
          <a href="mailto:santoyox714@gmail.com" class="inline-block px-4 py-2 text-sm rounded w-full border-indigo-500 font-medium text-zinc-900 hover:bg-indigo-800 hover:text-white focus:relative">Say Hello</a>
        </li>
      </ul>
    </div>
  </div>
</header>
