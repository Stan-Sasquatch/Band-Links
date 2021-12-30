export interface Artist {
	id: number;
	firstName: string;
	lastName: string;
	shortBio: string;
	longBio: string;
	instrument: string;
	knownFor: string;
	linkedArtists: number[];
}

export interface ArtistDTO {
	currentArtist: Artist;
	linkedArtists: Artist[];
}
