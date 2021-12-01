import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const validationSchema = yup.object({
    question: yup
        .string('Enter your Question')
        .required('Question Is required'),
    option1: yup
        .string('Enter your Question')
        .required('Question Is required'),
    option2: yup
        .string('Enter your Question')
        .required('Question Is required'),
    option3: yup
        .string('Enter your Question')
        .required('Question Is required'),
    option4: yup
        .string('Enter your Question')
        .required('Question Is required'),
    correctOption: yup
        .string('Enter your Question')
        .required('Question Is required'),
});

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

    const formik = useFormik({
        initialValues: {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correctOption: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <Box textAlign="right">
                <Button onClick={handleOpen} variant="outlined" sx={{ marginBottom: 3 }}>{buttonText}</Button>
            </Box>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2" align="right" ><CloseOutlinedIcon sx={{ cursor: "pointer" }} onClick={handleClose} /></Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Questions
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        There will be four options and a correct option.
                    </Typography>

                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <TextField id="standard-basic1" label="Enter your question" variant="standard" fullWidth type="text"
                                    name="question"
                                    value={formik.values.question}
                                    onChange={formik.handleChange}
                                    error={formik.touched.question && Boolean(formik.errors.question)}
                                    helperText={formik.touched.question && formik.errors.question}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic2" label="Option1" variant="standard" fullWidth
                                    name="option1"
                                    value={formik.values.option1}
                                    onChange={formik.handleChange}
                                    error={formik.touched.option1 && Boolean(formik.errors.option1)}
                                    helperText={formik.touched.option1 && formik.errors.option1}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic3" label="Option2" variant="standard" fullWidth type="text"
                                    name="option2"
                                    value={formik.values.option2}
                                    onChange={formik.handleChange}
                                    error={formik.touched.option2 && Boolean(formik.errors.option2)}
                                    helperText={formik.touched.option2 && formik.errors.option2}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic4" label="Option3" variant="standard" fullWidth
                                    name="option3"
                                    value={formik.values.option3}
                                    onChange={formik.handleChange}
                                    error={formik.touched.option3 && Boolean(formik.errors.option3)}
                                    helperText={formik.touched.option3 && formik.errors.option3}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic5" label="Option4" variant="standard" fullWidth
                                    name="option4"
                                    value={formik.values.option4}
                                    onChange={formik.handleChange}
                                    error={formik.touched.option4 && Boolean(formik.errors.option4)}
                                    helperText={formik.touched.option4 && formik.errors.option4}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="standard-basic6" label="Correct Option" variant="standard" fullWidth
                                    name="correctOption"
                                    value={formik.values.correctOption}
                                    onChange={formik.handleChange}
                                    error={formik.touched.correctOption && Boolean(formik.errors.correctOption)}
                                    helperText={formik.touched.correctOption && formik.errors.correctOption}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Button variant="outlined" type="submit">Save</Button>
                            </Grid>
                        </Grid>
                    </form>

                </Box>
            </Modal>
        </div>
    );
}