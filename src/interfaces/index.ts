export interface Painting {
    authorId: number,
    created: string,
    id: number,
    imageUrl: string,
    locationId: number,
    name: string
}

export interface Authors {
    id: number;
    name: string;
}

export interface Locations {
    id: number;
    location: string;
}