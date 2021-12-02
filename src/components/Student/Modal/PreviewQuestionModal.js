import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

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
    maxHeight: "70vh",
    overflow: "auto"
};

export default function PreviewQuestionModal(props) {
    const { buttonText, quizCardsData, id } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRadioButtonChange = (e) => {
        console.log("value", e.target.value)
    }
    const returnAllQuestions = () => {
        return quizCardsData.map((item, index) => {
            if (item.id === id) {
                console.log(item.id, id)
                const questionsArr = item.questions;
                return questionsArr.map((item, index) => {

                    return (
                        <Box key={index}>

                            <Typography variant="inherit" component="h2">
                                Question-{index+1}: {item.question}
                            </Typography>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    defaultValue=""
                                    name="radio-buttons-group"
                                    onChange={handleRadioButtonChange}
                                >
                                    <FormControlLabel value={item.options[0].option1} control={<Radio />} label={item.options[0].option1} />
                                    <FormControlLabel value={item.options[0].option2} control={<Radio />} label={item.options[0].option2} />
                                    <FormControlLabel value={item.options[0].option3} control={<Radio />} label={item.options[0].option3} />
                                    <FormControlLabel value={item.options[0].option4} control={<Radio />} label={item.options[0].option4} />
                                </RadioGroup>
                            </FormControl>
                        </Box>)
                })
            }
            return null;
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
                        <CloseOutlinedIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
                    </Typography>
                    {returnAllQuestions()}
                    <Box textAlign="left"><Button variant="contained">Submit</Button></Box>
                </Box>
            </Modal>
        </div>
    );
}