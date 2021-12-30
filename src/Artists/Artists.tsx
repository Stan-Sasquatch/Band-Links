import React, { FunctionComponent, useEffect, useState } from "react";
import { Card, Grid, Header, Image } from "semantic-ui-react";
import { Spinner } from "../Utils/Spinner";
import { ArtistsApi } from "./ArtistsApi";
import { Artist } from "./Models";
import LinkedArtistCard from "./LinkedArtistCard";

interface ArtistsProps {
	initialArtistId: number;
}
const Artists: FunctionComponent<ArtistsProps> = ({ initialArtistId }) => {
	const [currentArtist, setCurrentArtist] = useState<Artist | null>(null);
	const [linkedArtists, setLinkedArtists] = useState<Artist[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [artistId, setArtistId] = useState<number>(initialArtistId);

	useEffect(() => {
		async function initArtistDetail() {
			console.log(artistId);
			const artistsApi = new ArtistsApi(artistId);
			const response = await artistsApi.getCurrentAndLinkedArtists();

			setCurrentArtist(response.currentArtist);
			setLinkedArtists(response.linkedArtists);
			setLoading(false);
		}
		initArtistDetail();
	}, [artistId]);
	console.log(JSON.stringify(currentArtist));

	function onLinkedArtistCardClick(id: number) {
		return (_event: any, _data: any) => setArtistId(id);
	}

	return (
		<Spinner active={loading}>
			<Grid celled padded={"horizontally"}>
				<Grid.Row columns={1}>
					<Grid.Column width={16}>
						<Header as="h1">
							{currentArtist?.firstName} {currentArtist?.lastName}
						</Header>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={3}>
					<Grid.Column width={3}>
						<Image
							src={`/Assets/${currentArtist?.firstName}-${currentArtist?.lastName}.jpg`}
							alt={currentArtist ? `picture of ${currentArtist.firstName} ${currentArtist.lastName}` : "Loading image"}
						/>
					</Grid.Column>
					<Grid.Column width={10}>
						<p>{currentArtist?.longBio}</p>
					</Grid.Column>
					<Grid.Column width={3}>
						<Header as="h2">Related Artists</Header>
						<Card.Group itemsPerRow={1} stackable>
							{linkedArtists.map((a) => (
								<LinkedArtistCard artist={a} key={a.id} onClick={onLinkedArtistCardClick(a.id)} />
							))}
						</Card.Group>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Spinner>
	);
};

export default Artists;
