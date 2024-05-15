import { JokeForm } from './JokeForm';
import { Stack, Typography, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export const NewJoke = () => {
    const navigate = useNavigate();
    const handleSubmit = (params) => {
        fetch(`${process.env.APIHOST}/joke`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Error on post");
        }).then(() => {
            alert("New Joke Created!");
            return navigate('/');
        }).catch((error) => {
            alert("error");
        });
    }

    return <Stack>
        <Stack textAlign={"center"} alignItems={"center"} >
            <Stack direction={"row"} spacing={2} p={2}>
                <Button variant="contained" component={Link} to={`/`} >Home</Button>
                <Typography variant="h4">New Joke</Typography>
            </Stack>
        </Stack>
        <Stack> <JokeForm handleSubmit={handleSubmit} /> </Stack>
    </Stack>;
}