import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const ColumnWithPopout = ({ heading, paragraph, ...rest }) => {
    console.log(`in column with popout heading: ${heading} paragraph: ${paragraph}, rest: ${rest}`);
    return (
        <Grid.Column className="column pointer"{...rest} style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
        </Grid.Column>

    );
}

export default ColumnWithPopout;

