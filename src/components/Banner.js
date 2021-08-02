import { Button, makeStyles, Typography } from '@material-ui/core';
import background_image from "../img/alexander-kaunas-unsplash.jpg";
import { useHistory } from 'react-router-dom';

const Banner = () => {

    const classes = useStyle();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <Typography variant="h2">
                    Plan your getaway...
                </Typography>
                <Button onClick={()=> history.push("/search")} 
                variant="contained"
                >
                    Check our rooms
                </Button>
            </div>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        height: "50vh",
        position: "relative",
        backgroundImage: `url(${background_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    info: {
        backgroundColor: "#000",
        color: "#fff",
        width: "350px",
        padding: theme.spacing(2),
        "& h2": {
            marginBottom: theme.spacing(4),
            fontWeight: "500"
        },
        "& button": {
            backgroundColor: "rgba(255, 103, 31)",
            color: "#fff",
            textTransform: "inherit",
            fontSize: "1.2rem",
            fontWeight: "bold",
        },
        "& button:hover": {
            backgroundColor: "#fff",
            color: "rgba(255, 103, 31)"
        }
    }
}))

export default Banner;
