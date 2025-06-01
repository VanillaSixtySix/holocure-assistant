export interface Weapon {
    icon: string;
    name: string;
}

export interface Collab extends Weapon {
    weapons: Weapon[];
    attackType: string;
}
