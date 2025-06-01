export interface Weapon {
    icon: string;
    name: string;
}

export interface Collab extends Weapon {
    weapons: Weapon[];
    attackType: string;
}

export interface Item {
    icon: string;
    name: string;
}

export interface SuperCollab extends Weapon {
    attackType: string;
    collab: Collab;
    item: Item;
}
