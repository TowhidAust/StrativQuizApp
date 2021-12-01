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

export default function Quiz() {

    const [quizCards, setQuizCards] = useState([
        {
            id: 1,
            quizTitle: 'PHYSICS',
            startTime: "2021-12-01T04:00:00.946Z",
            duration: 10,
            endTime: "2021-12-01T05:00:00.946Z",
            summary: "Exam time is fixed. You have to submit your answers within the given time.",
            questions: [
                {
                    id: 'q1',
                    question: "What is redux?",
                    options: [{
                        option1: "Global state mangement",
                        option2: "React context",
                        option3: "React component",
                        option4: "None of the These",
                        correctAnswer: "Global state",
                    }]
                }
            ]
        },
        {
            id: 2,
            quizTitle: 'CHEMISTRY',
            startTime: "2021-12-01T04:20:07.946Z",
            endTime: "2021-12-01T05:20:07.946Z",
            duration: 10,
            summary: "Exam time is fixed. You have to submit your answers within the given time",
        },
        {
            id: 3,
            quizTitle: 'ICT',
            startTime: "2021-12-01T04:20:07.946Z",
            endTime: "2021-12-01T05:20:07.946Z",
            duration: 10,
            summary: "Exam time is fixed. You have to submit your answers within the given time",
        }
    ]);
    const [modalOpen, setModalOpen] = useState(false)

    const startButtonHandler = () => {
        alert('Start Button clicked')
    }


    const returnQuizCards = () => {
        return quizCards.map((item, index) => {
            return (
                <Grid item xs={12} md={4}>
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
                            <Button size="small" onClick={startButtonHandler}>Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })
    }

    return (
        <Layout>
            <Box sx={{ width: "80%", margin: "auto", marginTop: "2%" }}>
                <CreateQuestionModal buttonText="Create" />
                <Grid container spacing={2}>
                    {returnQuizCards()}
                </Grid>
            </Box>
        </Layout>
    );
}