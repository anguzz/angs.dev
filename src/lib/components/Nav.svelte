<script>
  import { navMenu, name } from '$lib/info'
  import MoonIcon from '$lib/components/icons/MoonIcon.svelte'
  import SunIcon from '$lib/components/icons/SunIcon.svelte'
  import { browser } from '$app/environment'

  let toggleMenu = false

  let isDarkMode = browser
    ? Boolean(document.documentElement.classList.contains('dark'))
    : true

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')

    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }
</script>

<header class="flex items-center justify-between w-full py-4 mx-auto lg:pb-8 gap-16">

  <!-- Site Name -->
  <a
    class="text-lg font-bold sm:text-2xl dark:text-blue-500 text-blue-700"
    href="/"
  >
    {name}
  </a>

  <div class="flex justify-around gap-2 items-center">

    <!-- Desktop Nav -->
    <div class="sm:flex hidden justify-center p-1 relative sm:w-auto sm:-space-x-px overflow-hidden sm:rounded-xl">
      <nav aria-label="Global">
        <ul class="flex items-center gap-2 text-sm">

          {#each navMenu as item}
            <li>
              <a
                href={item.link}
                class="inline-block px-4 py-2 border-2 text-sm rounded-full border-blue-500 font-medium text-zinc-900 dark:text-zinc-50 hover:bg-indigo-800 hover:text-white"
              >
                {item.title}
              </a>
            </li>
          {/each}

        </ul>
      </nav>
    </div>

    <!-- Mobile Menu Button -->
    <div class="dropdown flex mr-2 sm:hidden gap-2">

      <button on:click={() => (toggleMenu = !toggleMenu)} class="bg-transparent">

        {#if toggleMenu}
          <!-- Close icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block h-6 w-6 stroke-current">
            <title>Close Dropdown</title>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>

        {:else}
          <!-- Hamburger -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block h-6 w-6 stroke-current">
            <title>Open Dropdown</title>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}

      </button>

      <!-- Mobile Dropdown -->
      <ul class={`${toggleMenu ? 'block' : 'hidden'} w-52 absolute right-8 z-50 top-16 py-2 mt-2 mr-10 bg-white rounded-lg shadow-xl dark:bg-zinc-700`}>

        {#each navMenu as item}
          <li class="mb-2">
            <a
              href={item.link}
              on:click={() => (toggleMenu = false)}
              class="inline-block px-4 py-2 text-sm rounded font-medium text-zinc-900 dark:text-zinc-50 w-full hover:bg-indigo-800 hover:text-white"
            >
              {item.title}
            </a>
          </li>
        {/each}

      </ul>

    </div>

    <!-- Dark Mode Toggle -->
    <button
      type="button"
      role="switch"
      aria-label="Toggle Dark Mode"
      aria-checked={isDarkMode}
      class="w-5 h-5 sm:h-8 sm:w-8 sm:p-1"
      on:click={() => {
        isDarkMode = !isDarkMode
        localStorage.setItem('isDarkMode', isDarkMode.toString())

        disableTransitionsTemporarily()

        if (isDarkMode) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }}
    >
      {#if isDarkMode}
        <SunIcon class="text-zinc-400" />
      {:else}
        <MoonIcon class="text-zinc-500" />
      {/if}
    </button>

  </div>
</header>