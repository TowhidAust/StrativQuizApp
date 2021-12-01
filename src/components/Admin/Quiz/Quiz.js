import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Layout from '../../Common/Layout/Layout';
import CreateQuestionModal from '../Modal/CreateQuestionModal';
import PreviewQuestionModal from '../Modal/PreviewQuestionModal';
import { quizCardData } from '../Utils/helper';

export default function Quiz() {

    // eslint-disable-next-line
    const [quizCards, setQuizCards] = useState(quizCardData);

    const returnQuizCards = () => {
        return quizCards.map((item, index) => {
            return (
                <Grid item xs={12} md={4} key={index}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {item.quizTitle}
                            </Typography>
                            <Typography sx={{ mb: 0 }} color="text.secondary">
                                Start: {new Date(item.startTime).toLocaleTimeString()}
                            </Typography>
                            <Typography sx={{ mb: 0 }} color="text.secondary">
                                End: {new Date(item.endTime).toLocaleTimeString()}
                            </Typography>
                            <Typography sx={{ mb: 1 }} color="text.secondary">
                                Duration: {item.duration} min
                            </Typography>
                            <Typography color="text.secondary">
                                {item.summary}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><PreviewQuestionModal buttonText="preview" quizCardsData={quizCards} id={item.id}/></Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })
    }

    return (
        <Layout>
            <Box sx={{ width: "80%", margin: "auto", marginTop: "2%" }}>
                <Typography variant="h5" component="div"> Welcome Admin</Typography>
                <CreateQuestionModal buttonText="Create" />
                <Grid container spacing={2}>
                    {returnQuizCards()}
                </Grid>
            </Box>
        </Layout>
    );
}