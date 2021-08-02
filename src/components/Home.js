import { CssBaseline, makeStyles, Button, Grid } from '@material-ui/core';
import Banner from './Banner';
import DatePicker from './DatePicker';
import RoomCard from './RoomCard';
import { useState } from 'react';
import mockData from "../mockData";

const Home = () => {

    const classes = useStyle();
    const [showdates, setShowdates] = useState(false);

    return (
        <div>
            <CssBaseline />
            <div className={classes.root}>
                <div className={classes.dates}>
                    <Button
                        onClick= { ()=> setShowdates(!showdates)}>
                        { 
                            showdates ? "Hide" : "Search Dates"
                        }
                    </Button>
                </div>
                {
                    showdates && <DatePicker />
                }
                <Banner />
                <Grid container spacing={3} className={classes.section}>
                    {
                        mockData.map(({src, title, description}, index) => (
                            <Grid item sm="6" md="4" lg="3" // Se divide entre 12 y sale cuantas fotos habrá
                            >
                                <RoomCard 
                                src={src} 
                                title={title} 
                                description={description} 
                                key={index} 
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(2)
    },
    dates: {
        display: "flex",
        flexDirection: "column",
        "& button": {
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            color: "rgba(255, 103, 31, .4)",
            textTransform: "inherit",
            fontSize: "1.2rem",
            fontWeight: "bold"
        },
        "& button:hover": {
            backgroundColor: "rgba(255, 103, 31, .4)",
            color: "#fff"
        }
    }

}))

export default Home;
