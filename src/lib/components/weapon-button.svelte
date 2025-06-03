<script lang="ts">
    import { base } from '$app/paths';
    import IconText from './icon-text.svelte';

    const { weapon, onWeaponSelect, selected, compatible = true, used = false, hovered = false } = $props();
</script>

<button class="cursor-pointer rounded-md" class:selected class:incompatible={!compatible} class:used class:hovered onclick={() => onWeaponSelect(weapon)}>
    <IconText icon={`${base}/sprites/${weapon.icon}`} text={weapon.name} />
</button>

<style>
    button:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    button.selected {
        background: rgba(127, 127, 255, 0.3);
    }
    button.incompatible {
        opacity: 0.5;
        filter: brightness(0.8);
        pointer-events: none;
    }
    button.used {
        opacity: 0.3;
        filter: brightness(0.5) grayscale(1);
        pointer-events: none;
    }
    button.hovered {
        background: rgba(255, 255, 0, 0.5);
        filter: brightness(0.8) grayscale(0.5);
        box-shadow: 0 0 8px rgba(255, 255, 0, 0.4);
    }
</style>
