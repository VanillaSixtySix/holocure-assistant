<script lang="ts">
    import { base } from '$app/paths';
    import WeaponButton from '$lib/components/weapon-button.svelte';
    import IconText from '$lib/components/icon-text.svelte';

    import type { Weapon, Collab, Item, SuperCollab } from '$lib';

    const weapons = {
        blBook: {
            icon: 'spr_BLBookIcon_0.png',
            name: 'BL Book',
        },
        bounceBall: {
            icon: 'spr_BounceBallIcon_0.png',
            name: 'Bounce Ball',
        },
        ceoTears: {
            icon: 'spr_CEOTearsIcon_0.png',
            name: 'CEO\'s Tears',
        },
        cuttingBoard: {
            icon: 'spr_CuttingBoardIcon_0.png',
            name: 'Cutting Board',
        },
        eliteLavaBucket: {
            icon: 'spr_elitelava_0.png',
            name: 'Elite Lava Bucket',
        },
        enCurse: {
            icon: 'spr_ENCurse_0.png',
            name: 'EN\'s Curse',
        },
        fanBeam: {
            icon: 'spr_HoloMic_0.png',
            name: 'Fan Beam',
        },
        glowstick: {
            icon: 'spr_GlowStickIcon_0.png',
            name: 'Glowstick',
        },
        holoBomb: {
            icon: 'spr_HoloBombIcon_0.png',
            name: 'Holo Bomb',
        },
        idolSong: {
            icon: 'spr_MusicNoteIcon_0.png',
            name: 'Idol Song',
        },
        owlBlade: {
            icon: 'spr_OwlDaggerIcon_0.png',
            name: 'Owl Blade',
        },
        plugTypeAsacoco: {
            icon: 'spr_TailPlugIcon_0.png',
            name: 'Plug Type Asacoco',
        },
        psychoAxe: {
            icon: 'spr_PsychoAxeIcon_0.png',
            name: 'Psycho Axe',
        },
        sausage: {
            icon: 'spr_Sausage_0.png',
            name: 'Sausage',
        },
        spiderCooking: {
            icon: 'spr_SpiderCookingIcon_0.png',
            name: 'Spider Cooking',
        },
        wamyWater: {
            icon: 'spr_WamyWaterIcon_0.png',
            name: 'Wamy Water',
        },
        xPotato: {
            icon: 'spr_XPotatoIcon_0.png',
            name: 'X-Potato',
        }
    };

    const items = {
        gorillasPaw: {
            icon: 'spr_GorillasPawIcon_0.png', // placeholder icon
            name: 'Gorilla\'s Paw',
        },
        idolCostume: {
            icon: 'spr_IdolCostumeIcon_0.png', // placeholder icon
            name: 'Idol Costume',
        },
        uberSheep: {
            icon: 'spr_UberSheepIcon_0.png', // placeholder icon
            name: 'Uber Sheep',
        },
        sake: {
            icon: 'spr_SakeIcon_0.png', // using sake icon
            name: 'Sake',
        },
        hopeSoda: {
            icon: 'spr_HopeSodaIcon_0.png', // placeholder icon
            name: 'Hope Soda',
        }
    };

    const collabs = [
        {
            icon: 'spr_AbsoluteWallIcon_0.png',
            name: 'Absolute Wall',
            weapons: [weapons.bounceBall, weapons.cuttingBoard],
            attackType: 'Melee',
        },
        {
            icon: 'spr_BLLoverIcon_0.png',
            name: 'BL Fujoshi',
            weapons: [weapons.blBook, weapons.psychoAxe],
            attackType: 'Melee',
        },
        {
            icon: 'spr_BoneBrosIcon_0.png',
            name: 'Bone Bros.',
            weapons: [weapons.cuttingBoard, weapons.enCurse],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_BreatheInAsacocoIcon_0.png',
            name: 'Breathe-In Type Asacoco',
            weapons: [weapons.holoBomb, weapons.plugTypeAsacoco],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_BrokenDreamsIcon_0.png',
            name: 'Broken Dreams',
            weapons: [weapons.ceoTears, weapons.spiderCooking],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_StarHalberdIcon_0.png',
            name: 'Crescent Bardiche',
            weapons: [weapons.idolSong, weapons.psychoAxe],
            attackType: 'Melee',
        },
        {
            icon: 'spr_CurseBallIcon_0.png',
            name: 'Curse Ball',
            weapons: [weapons.bounceBall, weapons.enCurse],
            attackType: 'Ranged',
        },
        {
            icon: 'spr_DragonBeamIcon_0.png',
            name: 'Dragon Fire',
            weapons: [weapons.fanBeam, weapons.plugTypeAsacoco],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_EldrichHorrorIcon_0.png',
            name: 'Eldritch Horror',
            weapons: [weapons.enCurse, weapons.spiderCooking],
            attackType: 'Ranged',
        },
        {
            icon: 'spr_EliteCookingIcon_0.png',
            name: 'Elite Cooking',
            weapons: [weapons.eliteLavaBucket, weapons.spiderCooking],
            attackType: 'Ranged',
        },
        {
            icon: 'spr_FlatboardIcon_0.png',
            name: 'Flattening Board',
            weapons: [weapons.cuttingBoard, weapons.holoBomb],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_MariLamyIcon_0.png',
            name: 'Frozen Sea',
            weapons: [weapons.blBook, weapons.wamyWater],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_IdolConcertIcon_0.png',
            name: 'Idol Concert',
            weapons: [weapons.glowstick, weapons.idolSong],
            attackType: 'Ranged',
        },
        {
            icon: 'spr_ImDieIcon_0.png',
            name: 'I\'m Die, Thank You Forever',
            weapons: [weapons.holoBomb, weapons.xPotato],
            attackType: 'Ranged',
        },
        {
            icon: 'spr_LegendarySausageIcon_0.png',
            name: 'Legendary Sausage',
            weapons: [weapons.blBook, weapons.sausage],
            attackType: 'Melee',
        },
        {
            icon: 'spr_LightBeamIcon_0.png',
            name: 'Light Beam',
            weapons: [weapons.fanBeam, weapons.glowstick],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_LightningWeinerIcon_0.png',
            name: 'Lightning Wiener',
            weapons: [weapons.plugTypeAsacoco, weapons.sausage],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_MiCometIcon_0.png',
            name: 'MiComet',
            weapons: [weapons.eliteLavaBucket, weapons.psychoAxe],
            attackType: 'Ranged',
        },
        {
            icon: 'spr_MiKoroneIcon_0.png',
            name: 'MiKorone',
            weapons: [weapons.eliteLavaBucket, weapons.xPotato],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_RapDogIcon_0.png',
            name: 'Rap Dog',
            weapons: [weapons.idolSong, weapons.xPotato],
            attackType: 'Ranged',
        },
        {
            icon: 'spr_RingOfFitnessIcon_0.png',
            name: 'Ring Of Fitness',
            weapons: [weapons.bounceBall, weapons.ceoTears],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_SnowSakeIcon_0.png',
            name: 'Snow Flower Sake',
            weapons: [weapons.glowstick, weapons.wamyWater],
            attackType: 'Multishot',
        },
        {
            icon: 'spr_StreamOfTearsIcon_0.png',
            name: 'Stream Of Tears',
            weapons: [weapons.ceoTears, weapons.fanBeam],
            attackType: 'Ranged',
        },
        {
            icon: 'spr_BlackPlagueIcon_0.png',
            name: 'Black Plague',
            weapons: [weapons.enCurse, weapons.owlBlade],
            attackType: 'Melee',
        },
        {
            icon: 'spr_BloodThirstIcon_0.png',
            name: 'Blood Lust',
            weapons: [weapons.psychoAxe, weapons.owlBlade],
            attackType: 'Melee',
        }
    ];

    const superCollabs = [
        {
            icon: 'spr_KanaCocoIcon_0.png',
            name: 'Holy Fire',
            attackType: 'Multishot',
            collab: collabs.find(c => c.name === 'Dragon Fire')!,
            item: items.gorillasPaw
        },
        {
            icon: 'spr_IdolLiveIcon_0.png',
            name: 'Idol Live',
            attackType: 'Ranged',
            collab: collabs.find(c => c.name === 'Idol Concert')!,
            item: items.idolCostume
        },
        {
            icon: 'spr_JingisukanIcon_0.png',
            name: 'Jingisukan',
            attackType: 'Ranged',
            collab: collabs.find(c => c.name === 'Elite Cooking')!,
            item: items.uberSheep
        },
        {
            icon: 'spr_SnowQueenIcon_0.png',
            name: 'Snow Queen',
            attackType: 'Ranged',
            collab: collabs.find(c => c.name === 'Snow Flower Sake')!,
            item: items.sake
        },
        {
            icon: 'spr_InfiniteBLIcon_0.png',
            name: 'True Infinite BL Works',
            attackType: 'Melee',
            collab: collabs.find(c => c.name === 'BL Fujoshi')!,
            item: items.hopeSoda
        }
    ];

    let selectedWeapons: Weapon[] = $state([]);
    let selectedSuperCollab: SuperCollab | undefined = $state(undefined);

    let collab: Collab | undefined = $state(undefined);
    let availableCollabs: (Collab | SuperCollab)[] = $state([]);

    function onWeaponSelect(weapon: Weapon) {
        // Clear super collab selection when selecting weapons
        selectedSuperCollab = undefined;
        
        const snapshot = $state.snapshot(selectedWeapons);
        const alreadySelected = snapshot.some(w => w.name === weapon.name);
        if (alreadySelected) {
            selectedWeapons = snapshot.filter(w => w.name !== weapon.name);
            return;
        }
        if (selectedWeapons.length === 2) return;
        selectedWeapons = [...selectedWeapons, weapon];
    }

    function getCompatibleWeapons(weapon: Weapon): Weapon[] {
        const compatibleWeapons: Weapon[] = [];
        
        // Find all collabs that include this weapon
        for (const collab of collabs) {
            if (collab.weapons.some(w => w.name === weapon.name)) {
                // Add all other weapons from this collab
                for (const collabWeapon of collab.weapons) {
                    if (collabWeapon.name !== weapon.name && 
                        !compatibleWeapons.some(w => w.name === collabWeapon.name)) {
                        compatibleWeapons.push(collabWeapon);
                    }
                }
            }
        }
        
        return compatibleWeapons;
    }

    function isWeaponCompatible(weapon: Weapon): boolean {
        if (selectedWeapons.length === 0) return true;
        if (selectedWeapons.some(w => w.name === weapon.name)) return true;
        
        const firstSelected = selectedWeapons[0];
        const compatibleWeapons = getCompatibleWeapons(firstSelected);
        
        return compatibleWeapons.some(w => w.name === weapon.name);
    }

    function getAvailableCollabs(weapon: Weapon): Collab[] {
        return collabs.filter(collab => 
            collab.weapons.some(w => w.name === weapon.name)
        );
    }


    $effect(() => {
        $inspect(selectedWeapons);
        
        if (selectedSuperCollab) {
            // Super collab selected - show only that super collab
            availableCollabs = [selectedSuperCollab];
            collab = undefined;
        } else if (selectedWeapons.length === 0) {
            // No weapons selected - hide all collaboration UI
            collab = undefined;
            availableCollabs = [];
        } else if (selectedWeapons.length === 1) {
            // Show all available collabs for the selected weapon
            availableCollabs = getAvailableCollabs(selectedWeapons[0]);
            collab = undefined;
        } else if (selectedWeapons.length === 2) {
            // Check for specific collab when 2 weapons are selected
            const foundCollab = collabs.find(c => 
                c.weapons.length === 2 &&
                c.weapons.some(w => w.name === selectedWeapons[0].name) &&
                c.weapons.some(w => w.name === selectedWeapons[1].name)
            );
            collab = foundCollab;
            // Still show available collabs for the first weapon when 2 are selected
            availableCollabs = getAvailableCollabs(selectedWeapons[0]);
        }
    });

    function isWeaponSelected(weapon: Weapon) {
        return $state.snapshot(selectedWeapons).includes(weapon);
    }

    function resetSelections() {
        selectedWeapons = [];
        selectedSuperCollab = undefined;
    }

    function onSuperCollabSelect(superCollab: any) {
        selectedSuperCollab = superCollab;
        selectedWeapons = [];
    }

    function isCollabAchievable(collab: Collab | SuperCollab): boolean {
        if (selectedWeapons.length !== 2) return true;
        
        // For super collabs, always return true since they're not weapon-dependent
        if ('collab' in collab) return true;
        
        // Check if the collab can be made with the currently selected weapons
        return collab.weapons.length === 2 &&
               collab.weapons.some(w => w.name === selectedWeapons[0].name) &&
               collab.weapons.some(w => w.name === selectedWeapons[1].name);
    }

    function isSuperCollab(item: Collab | SuperCollab): item is SuperCollab {
        return 'collab' in item;
    }
</script>

<style>
    .darkened {
        opacity: 0.4;
        filter: brightness(0.6);
    }
</style>

<h1 class="text-2xl font-semibold">HoloCure Assistant</h1>
<button 
    class="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-bold py-1 px-2 rounded mb-2 w-fit"
    onclick={resetSelections}
>
    Reset Selections
</button>
<div class="flex flex-col gap-2 bg-blue-900 p-2 rounded-md">
    <p><strong>Picker</strong> -
        {#if selectedWeapons.length === 0}
            Select a weapon to see all available collaborations.
        {:else if selectedWeapons.length === 1}
            All available collaborations are shown below. Select a second weapon to see the specific result.
        {:else}
            See below for the combination.
        {/if}
    </p>
    <div class="flex flex-wrap">
        {#each Object.entries(weapons) as [, weapon]}
            <div class="w-32 h-32">
                <WeaponButton 
                    {weapon} 
                    {onWeaponSelect} 
                    selected={selectedWeapons.some(w => w.name === weapon.name)}
                    compatible={isWeaponCompatible(weapon)}
                />
            </div>
        {/each}
    </div>
    
    <!-- Horizontal separator -->
    <hr class="border-blue-300 my-2" />
    
    <!-- Super Collabs section -->
    <div class="flex flex-col gap-2">
        <p><strong>Super Collabs</strong> - Click to see the collab and item combination.</p>
        <div class="flex flex-wrap gap-2">
            {#each superCollabs as superCollab}
                <button 
                    class="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-3 py-2 rounded text-sm transition-colors"
                    class:bg-blue-600={selectedSuperCollab?.name === superCollab.name}
                    onclick={() => onSuperCollabSelect(superCollab)}
                >
                    <img src="{base}/sprites/{superCollab.icon}" alt={superCollab.name} class="w-6 h-6" />
                    <span>{superCollab.name}</span>
                    <span class="text-xs text-blue-200">({superCollab.attackType})</span>
                </button>
            {/each}
        </div>
    </div>
</div>

{#if availableCollabs.length > 0 && (selectedWeapons.length > 0 || selectedSuperCollab)}
    <div class="flex flex-col gap-2 bg-green-900 p-2 rounded-md">
        {#if selectedSuperCollab}
            <p><strong>Super Collab: {selectedSuperCollab.name}</strong></p>
        {:else}
            <p><strong>Available Collaborations with {selectedWeapons[0].name}</strong></p>
        {/if}
        <div class="flex flex-wrap gap-4">
            {#each availableCollabs as availableCollab}
                <div class="flex flex-col gap-2 bg-green-800 p-3 rounded-md w-fit" class:darkened={!isCollabAchievable(availableCollab)}>
                    <IconText icon={`${base}/sprites/${availableCollab.icon}`} text={availableCollab.name} />
                    <div class="text-sm">
                        <p><strong>Attack Type:</strong> {availableCollab.attackType}</p>
                        {#if isSuperCollab(availableCollab)}
                            <p><strong>Made from:</strong></p>
                            <div class="flex flex-col gap-2 mt-1">
                                <!-- Collab component -->
                                <div class="bg-green-700 p-2 rounded">
                                    <p class="text-xs font-semibold mb-1">Collab: {availableCollab.collab.name}</p>
                                    <div class="flex gap-1">
                                        {#each availableCollab.collab.weapons as weapon}
                                            <div class="flex items-center gap-1 text-xs bg-green-600 px-2 py-1 rounded">
                                                <img src="{base}/sprites/{weapon.icon}" alt={weapon.name} class="w-4 h-4" />
                                                <span>{weapon.name}</span>
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                                <!-- Item component -->
                                <div class="bg-green-700 p-2 rounded">
                                    <p class="text-xs font-semibold mb-1">Item: {availableCollab.item.name}</p>
                                    <div class="flex items-center gap-1 text-xs bg-green-600 px-2 py-1 rounded w-fit">
                                        <img src="{base}/sprites/{availableCollab.item.icon}" alt={availableCollab.item.name} class="w-4 h-4" />
                                        <span>{availableCollab.item.name}</span>
                                    </div>
                                </div>
                            </div>
                        {:else}
                            <p><strong>Required Weapons:</strong></p>
                            <div class="flex gap-2 mt-1">
                                {#each availableCollab.weapons as weapon}
                                    <div class="flex items-center gap-1 text-xs bg-green-700 px-2 py-1 rounded">
                                        <img src="{base}/sprites/{weapon.icon}" alt={weapon.name} class="w-4 h-4" />
                                        <span>{weapon.name}</span>
                                    </div>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}
