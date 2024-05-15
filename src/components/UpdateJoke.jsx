import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { JokeForm } from "./JokeForm"

import { Stack, Typography, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export const UpdateJoke = ({ jokes }) => {
    const { id } = useParams();
    const [joke, setJoke] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setJoke(jokes.find(elem => {
            return elem.id === parseInt(id);
        }));
    }, [jokes]);

    const handleSubmit = (params) => {
        fetch(`${process.env.APIHOST}/joke/${id}`, {
            method: "PUT",
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
            alert("Joke Modified!");
            return navigate('/');
        }).catch((error) => {
            console.log(error);
            alert("error");
        });
    }

    return <Stack>
        <Stack textAlign={"center"} alignItems={"center"} >
            <Stack direction={"row"} spacing={2} p={2}>
                <Button variant="contained" component={Link} to={`/`} >Home</Button>
                <Typography variant="h4">Update Joke #{joke?.id}</Typography>
            </Stack>
        </Stack>
        <Stack> <JokeForm joke={joke} handleSubmit={handleSubmit} /> </Stack>
    </Stack>;
}