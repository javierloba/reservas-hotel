import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectStart, setStart } from "../features/startSlice";
import { selectEnd, setEnd } from "../features/endSlice";

const DatePicker = () => {

    const classes = useStyle();
    const history = useHistory();
    const start = useSelector(selectStart);
    const end = useSelector(selectEnd);
    const dispatch = useDispatch();

    const selectionRange = {
        startDate: start,
        endDate: end,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        dispatch(setStart(ranges.selection.startDate.getTime()))
        dispatch(setEnd(ranges.selection.endDate.getTime()))
    }

    return (
        <div className={classes.root}>
            <DateRangePicker 
            ranges={[selectionRange]}
            onChange={handleSelect}
            />
            <div className={classes.inputSection}>
                <Typography variant="h5"> Number of guests</Typography>
                <div className={classes.people}>
                    <InputBase placeholder="2pax"
                    inputProps={{className: classes.input}} // Esto permite darle estilos al input
                    />
                    <People />
                </div>
                <Button onClick={()=> history.push("/search")} // En vez de Link uso history
                >
                Search Rooms
                </Button>
            </div>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "13vh",
        left: "30vh",
        zIndex: "50",
        [theme.breakpoints.down("sm")]: {
            top: "16vh",
            left: 0
        }
    },
    inputSection: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        "& h5": {
            textAlign: "center"
        },
        "& button:hover": {
            backgroundColor: "rgba(255, 103, 31, .4)",
            color: "#fff"
        }
    },
    people: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "6vw",
        border: "1px solid #ccc",
        margin: theme.spacing(0, 2, 2, 0),
        padding: theme.spacing(1, 0, 1, 3)
    }
}))

export default DatePicker;
