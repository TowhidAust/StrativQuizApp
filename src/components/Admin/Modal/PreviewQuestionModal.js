import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight:"70vh",
    overflow:"auto"
};

export default function PreviewQuestionModal(props) {
    const { buttonText, quizCardsData, id } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const returnAllQuestions = () => {
        return quizCardsData.map((item, index) => {
            if(item.id === id) {
                console.log(item.id, id)
                const questionsArr = item.questions;
                return questionsArr.map((item, index) => {
    
                    return (
                        <Box key={index}>
                            <Typography variant="inherit" component="h2">
                                Question: {item.question}
                            </Typography>
                            <Typography variant="subtitle1" component="h2" >
                               Option1: {item.options[0].option1}
                            </Typography>
                            <Typography variant="subtitle1" component="h2" >
                               Option2: {item.options[0].option2}
                            </Typography>
                            <Typography variant="subtitle1" component="h2" >
                               Option3: {item.options[0].option3}
                            </Typography>
                            <Typography variant="subtitle1" component="h2" >
                               Option4: {item.options[0].option4}
                            </Typography>
                            <Typography variant="subtitle1" component="h2" >
                               correctAnswer: {item.options[0].correctAnswer}
                            </Typography>
                        </Box>)
                })

                
            }
            return 'Null'
        })
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined">{buttonText}</Button>
            <Modal

                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2" align="right" >
                        <CloseOutlinedIcon onClick={handleClose} sx={{ cursor: "pointer" }}/>
                    </Typography>
                    {returnAllQuestions()}
                </Box>
            </Modal>
        </div>
    );
}