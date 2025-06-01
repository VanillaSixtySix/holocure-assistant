<script lang="ts">
    import IconText from './icon-text.svelte';

    const { weapon, onWeaponSelect, selected, compatible = true } = $props();
</script>

<button class="cursor-pointer rounded-md" class:selected class:incompatible={!compatible} onclick={() => onWeaponSelect(weapon)}>
    <IconText icon={"/sprites/" + weapon.icon} text={weapon.name} />
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
</style>
