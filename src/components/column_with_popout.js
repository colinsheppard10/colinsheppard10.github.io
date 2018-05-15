import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const ColumnWithPopout = ({ heading, paragraph, ...rest }) => {
    return (
        <Grid.Column className="column pointer colp1"{...rest} style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>{heading}</Header>
            <p style={{ fontSize: '1.33em' }}>{paragraph}</p>
        </Grid.Column>

    );
}

export default ColumnWithPopout;

