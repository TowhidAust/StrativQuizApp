import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Layout from '../Common/Layout/Layout'
import PreviewQuestionModal from './Modal/PreviewQuestionModal'
import { quizCardData } from './Utils/helper'

export default function Student() {
    const [quizCards, setQuizCard] = useState(quizCardData)
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
                            <Button size="small"><PreviewQuestionModal buttonText="start quiz" quizCardsData={quizCards} id={item.id}/></Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })
    }
    return (
        <Layout className="student-root">
              <Box sx={{ width: "80%", margin: "auto", marginTop: "2%" }}>
                <Typography variant="h5" component="div"> Welcome User</Typography>
                <Grid container spacing={2}>
                    {returnQuizCards()}
                </Grid>
            </Box>
        </Layout>
    )
}
