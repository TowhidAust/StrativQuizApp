import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';

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
};

export default function CreateQuestionModal(props) {
    const { buttonText } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen} variant="outlined">{buttonText}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Questions
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        There will be four options and a correct option.
                    </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <TextField id="standard-basic" label="Enter your question" variant="standard" sx={{minWidth:"100%"}}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic" label="Option1" variant="standard" sx={{minWidth:"100%"}}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic" label="Option2" variant="standard" sx={{minWidth:"100%"}}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic" label="Option3" variant="standard" sx={{minWidth:"100%"}}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic" label="Option4" variant="standard" sx={{minWidth:"100%"}}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic" label="Correct Option" variant="standard" sx={{minWidth:"100%"}}/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Button variant="outlined">Save</Button>
                            </Grid>
                        </Grid>
                </Box>
            </Modal>
        </div>
    );
}