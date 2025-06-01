<script lang="ts">
    const { children } = $props();
</script>

<button class="bg-blue-500 hover:bg-blue-600 font-semibold p-2 rounded-md cursor-pointer">
    {@render children()}
</button>
