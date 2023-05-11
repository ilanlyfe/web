export interface Data {

}

export interface Persona {
    limit: Number;
    guestContext?: string;
    behavior?: Behavior; 
}

export interface Behavior {
    views: View[];
}

export interface getCurationsResponse {
    curations: Curation[];
}

export interface Item {
    id: string;
    type: ItemType; 
    active?: boolean;
    imageUrl: string; 
    title: string; 
    href: string; 
    description: string; 
    date: string; 
    datetime: string; 
    user: User;
}

export enum ItemType {
    STORY = "story",
    EXPERIENCE = "experience",
    JOURNEY = "journey",
    GUIDE = "guide",
    GEM = "gem",
    GUEST = "guest",

}

export interface User {
    name: string;
}

export interface View {
    itemId: string; 
    timeOnSuggeston: number; // seconds

}

export interface ItemProps {
    item: Item; 
}

export interface Curation {
    id: string;
    prevId?: string;
    nextId?: string;
    timeViewed: number;
    isLead?: boolean;
    items: Item[]; 
}