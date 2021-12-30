import * as React from "react";
import { FunctionComponent } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

interface SpinnerProps {
	active: boolean;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ active, children }) => (
	<Dimmer.Dimmable dimmed={active}>
		{children}
		<Dimmer active={active}>
			<Loader active={active} />
		</Dimmer>
	</Dimmer.Dimmable>
);
