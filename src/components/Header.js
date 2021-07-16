import { AppBar, makeStyles, Toolbar, InputBase, Typography, Avatar, IconButton, Drawer, List, ListItem } from '@material-ui/core'
import { useEffect, useState } from 'react';
import logo from "../img/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';

const Header = () => {
    
    const [tablet, setTablet] = useState(true)
    const [draweropen, setDraweropen] = useState(false)
    const classes = useStyle()

    useEffect(()=> {
        const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false)
        responsiveness();
        window.addEventListener("resize", ()=>responsiveness())
    }, [])

    const displayTablet = () => {

        const handleDrawerOpen = () => {
            setDraweropen(true)
        }
        const handleDrawerClose = () => {
            setDraweropen(false)
        }

        const headersData = ["My account", "Previous bookings", "Log out"];

        const getDrawerChoices = () => {
            return headersData.map(data => {
                return (
                    <List>
                        <ListItem>{data}</ListItem>
                    </List>
                )
            })
        }

        return (
            <Toolbar className={classes.toolbar}>
                <IconButton {...{
                    edge: "start", 
                    color: "#ccc",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                }}>
                    <MenuIcon fontSize="large" />
                </IconButton>
                <Drawer {...{
                    anchor: "left",
                    open: draweropen,
                    onClose: handleDrawerClose
                }}>
                    <div>{getDrawerChoices()}</div>
                </Drawer>
                <Link to="/">
                    <img src={logo} className={classes.logo} alt="logo" />
                </Link>
                <div className={classes.right}>
                <Typography>Sign in</Typography>
                <Avatar className={classes.avatar} />
            </div>
            </Toolbar>
        )
    }

    const displayDesktop = () => (
        <Toolbar className={classes.toolbar}>
            <Link to="/">
                <img src={logo} className={classes.logo} alt="logo" />
            </Link>
            <div className={classes.center}>
                <InputBase 
                fullWidth 
                placeholder="Search here..."
                inputProps={{ className: classes.input }}
                />
                <SearchIcon />
            </div>
            <div className={classes.right}>
                <Typography>Sign in</Typography>
                <Avatar className={classes.avatar} />
            </div>
        </Toolbar>
    )

    return (
        <AppBar className={classes.root}>
            {tablet ? displayTablet() : displayDesktop()}
        </AppBar>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: "99",
        width: "100vw"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        height: "30px",
        margin: theme.spacing(1, 0, 0, 2),
        objectFit: "contain"
    },
    input: {
        fontSize: "1.2rem",
        padding: theme.spacing(1, 5)
    },
    center: {
        display: "flex",
        alignItems: "center",
        border: "1px solid lightgray",
        minWidth: "300px",
        borderRadius: "30px",
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
    right: {
        color: "#333",
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(2)
    },
    avatar: {
        marginLeft: theme.spacing(2)
    }
}))

export default Header;
