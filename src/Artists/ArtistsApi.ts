import { Artist, ArtistDTO } from "./Models";
import data from "../Artists.json";

export class ArtistsApi {
	private readonly apiUrl: string;
	private readonly artistId: number;

	constructor(artistId: number) {
		this.apiUrl = `/api/artists/${artistId}`;
		this.artistId = artistId;
	}

	public async getCurrentAndLinkedArtists(): Promise<ArtistDTO> {
		// Mock API call should be replaced to send a request to a controller at /api/artists/${id}
		const findArtistById = (thisId: number) => {
			return data.find((a) => a.id === thisId);
		};

		const currentArtist = findArtistById(this.artistId) as Artist;
		const linkedArtists = currentArtist.linkedArtists.map((a) => findArtistById(a)) as Artist[];

		return { currentArtist, linkedArtists };
	}
}
