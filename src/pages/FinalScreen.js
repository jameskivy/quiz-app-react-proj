import { Button, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";


const FinalScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { score } = useSelector(state => state);

    const handleBackToHome = () =>{
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        navigate("/");

    }
    return (
        <Box>
            <br />
            <br />
            <br />
            <Typography variant="h3" fontWeight="bold" mb={5}>Final Score <br/><br/> {score}</Typography>
            <Button onClick={handleBackToHome} variant="contained">Take another quiz!</Button>
        </Box>
    )
}

export default FinalScreen
