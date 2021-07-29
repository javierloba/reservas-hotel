import { CssBaseline, makeStyles, Button } from '@material-ui/core';
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
                <div className={classes.section}>
                    {
                        mockData.map(({src, title, description}, index) => (
                            <RoomCard 
                            src={src} 
                            title={title} 
                            description={description} 
                            key={index} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column"
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
