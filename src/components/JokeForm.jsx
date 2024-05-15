import { useEffect, useState } from 'react';
import { Box, Stack, Button, FormLabel } from "@mui/material";
import Textarea from '@mui/joy/Textarea';

export const JokeForm = (params) => {
    const emptyJoke = { type: "", setup: "", punchline: "" };
    const { joke, handleSubmit } = params;
    const [newValues, setNewValues] = useState(joke || emptyJoke);


    useEffect(() => {
        setNewValues(joke || emptyJoke);
    }, [joke]);


    const handleChange = (e, attr) => {
        setNewValues(prevState => { return { ...prevState, [attr]: e.target.value } });
    }

    return <Stack alignItems={"center"}>
        <Box border={"1px solid black"} borderRadius={1} p={2} width={"50%"}>

            <Stack spacing={2} width={"100%"}>
                <FormLabel>Type</FormLabel>
                <Textarea variant="outlined" name="type" onChange={(e) => handleChange(e, "type")} value={newValues.type} />
                <FormLabel>Setup</FormLabel>
                <Textarea variant="outlined" name="setup" onChange={(e) => handleChange(e, "setup")} minRows={2} maxRows={4} value={newValues.setup} />
                <FormLabel>Punchline</FormLabel>
                <Textarea variant="outlined" name="punchline" onChange={(e) => handleChange(e, "punchline")} minRows={2} maxRows={4} value={newValues.punchline} />
                <Button
                    variant="contained"
                    onClick={() => {
                        if (handleSubmit) {
                            handleSubmit(newValues);
                        }
                    }}>Save</Button>
            </Stack>

        </Box>
    </Stack>;
}