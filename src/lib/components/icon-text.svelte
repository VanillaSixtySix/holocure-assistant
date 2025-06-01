<script lang="ts">
    const { icon, text } = $props();
</script>

<div class="flex flex-col gap-2 p-2 text-center pointer-events-none">
    <img class="w-12 self-center pixelated aspect-square object-contain" draggable="false" src={icon} alt={text}>
    <span class="max-w-32 select-none">{text}</span>
</div>

<style>
    .pixelated {
        image-rendering: pixelated;
    }
</style>
