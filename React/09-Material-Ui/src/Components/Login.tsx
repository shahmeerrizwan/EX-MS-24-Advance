
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Login() {
    const [model, setModel] = useState<any>({})

 

    return <>
        <Box sx={{ height: '100vh' }} className='bg-light d-flex justify-content-center align-items-center'>
            <Box>
                <Box className='p-3'>
                    <Typography className="fs-2">Login</Typography>
                </Box>
                <Box className='p-3'>
                    <TextField
                        value={model.email}
                        onChange={(e) => {
                            setModel({ ...model, email: e.target.value })
                        }}
                        variant="standard"
                        label='Email'
                    />
                </Box>
                <Box className='p-3'>
                    <TextField
                        value={model.password}
                        onChange={(e) => {
                            setModel({ ...model, password: e.target.value })
                        }}
                        variant="standard"
                        label='Password'
                    />
                </Box>
                <Box className='p-3'>
                    <Button variant="contained" color="error" fullWidth={true}>Login</Button>
                </Box>
            </Box>
        </Box>
    </>
}
