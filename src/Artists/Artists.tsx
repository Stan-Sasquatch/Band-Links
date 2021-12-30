import React, { FunctionComponent, useEffect, useState } from "react";
import { Card, Grid, Header, Image } from "semantic-ui-react";
import { Spinner } from "../Utils/Spinner";
import { ArtistsApi } from "./ArtistsApi";
import { Artist } from "./Models";
import ArtistCard from "./ArtistCard";

interface ArtistsProps {
	initialArtistId: number;
}
const Artists: FunctionComponent<ArtistsProps> = ({ initialArtistId }) => {
	const [currentArtist, setCurrentArtist] = useState<Artist | null>(null);
	const [linkedArtists, setLinkedArtists] = useState<Artist[]>([]);
	const [artistId, setArtistId] = useState<number>(initialArtistId);

	useEffect(() => {
		async function initArtistDetail() {
			console.log(artistId);
			const artistsApi = new ArtistsApi(artistId);
			const response = await artistsApi.getCurrentAndLinkedArtists();

			setCurrentArtist(response.currentArtist);
			setLinkedArtists(response.linkedArtists);
		}
		initArtistDetail();
	}, [artistId]);

	function onLinkedArtistCardClick(id: number) {
		return (_event: any, _data: any) => setArtistId(id);
	}

	return (
		<>
			{currentArtist ? (
				<Grid celled padded={"horizontally"}>
					<Grid.Row columns={3}>
						<Grid.Column width={3}>
							<ArtistCard
								artist={currentArtist}
								key={currentArtist.id}
								onClick={onLinkedArtistCardClick(currentArtist.id)}
							/>
						</Grid.Column>
						<Grid.Column width={11}>
							<Grid.Row>
								<Header as="h1">
									{currentArtist.firstName} {currentArtist.lastName}
								</Header>
							</Grid.Row>
							<Grid.Row>
								<p>{currentArtist.longBio}</p>
							</Grid.Row>
						</Grid.Column>
						<Grid.Column width={2}>
							<Header as="h2">Related Artists</Header>
							<Card.Group itemsPerRow={1} stackable>
								{linkedArtists.map((a) => (
									<ArtistCard artist={a} key={a.id} onClick={onLinkedArtistCardClick(a.id)} />
								))}
							</Card.Group>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			) : (
				<Spinner active />
			)}
		</>
	);
};

export default Artists;
