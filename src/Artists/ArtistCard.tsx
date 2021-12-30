import React, { FunctionComponent } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Artist } from "./Models";

interface ArtistCardProps {
	artist: Artist;
	onClick: (_event: any, _data: any) => void;
}

const ArtistCard: FunctionComponent<ArtistCardProps> = ({ artist, onClick }) => (
	<Card onClick={onClick} fluid>
		<Image
			src={`/Assets/${artist?.firstName}-${artist?.lastName}.jpg`}
			alt={artist ? `picture of ${artist.firstName} ${artist.lastName}` : "Loading image"}
		/>
		<Card.Content>
			<Card.Header>
				{artist.firstName} {artist.lastName}
			</Card.Header>

			<Card.Description>{artist.shortBio}</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<Icon name="star" />
			{`${artist.instrument}, ${artist.knownFor}`}
		</Card.Content>
	</Card>
);

export default ArtistCard;
