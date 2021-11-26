import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function Quiz() {
    return (
        <Box sx={{width: "80%", margin: "auto"}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Quiz 1
                            </Typography>
                            <Typography color="text.secondary">
                                Mathmatics
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Duration: 10 min
                            </Typography>
                            <Typography color="text.secondary">
                                You will not get any extra time
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Start</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}