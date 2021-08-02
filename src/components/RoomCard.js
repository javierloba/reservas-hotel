import { makeStyles, Typography } from '@material-ui/core';

const RoomCard = ({ src, title, description }) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <figure className={classes.imageWrapper}>
                <img className={classes.media} src={src} alt={title} />
            </figure>
            <Typography variant="h5" color="textPrimary">
            {title}
            </Typography>
            <Typography variant="h6" color="textSecondary">
            {description}
            </Typography>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4, 0, 2, 0),
        [theme.breakpoints.down("xs")]: {
            "& h6": {
                wordWrap: "break-word"
            }
        }
    },
    imageWrapper: {
        overflow: "hidden"
    },
    media: {
        height: "400px",
        width: "600px",
        objectFit: "cover",
        transform: "scale(1.1)",
        webkitTransform: "scale(1.1)",
        transition: ".4s ease-in-out",
        webkitTransition: ".4s ease-in-out",
        "&:hover": {
            transform: "scale(1)",
            webkitTransform: "scale(1)"
        }
    }
}))

export default RoomCard;