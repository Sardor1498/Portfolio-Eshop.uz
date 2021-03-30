import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarIcon from '@material-ui/icons/Star';
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 200,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            className={
                classes.root +
                " h-full w-full hover:bg-blue-300 hover:border-4 cursor-pointer focus:border-yellow-800"
            }
        >
            {
                !props.productsIsLoaded ? (
                    <Skeleton
                        animation="wave"
                        variant="circle"
                        width={40}
                        height={40}
                    />
                ) : (

                        <CardMedia
                            className={classes.media + " h-80"}
                            image={props.data.photo}
                            title={props.data.title}
                        />
                    )}
            <CardHeader className="p-1" subheader={ !props.productsIsLoaded ? (
                <Skeleton
                    animation="wave"
                    width="40%"
                    height={10}
                />
            ) : (
                    props.data.title
                )
            }

            />
            { !props.productsIsLoaded ? (
                <React.Fragment>
                    <Skeleton
                        animation="wave"
                        height={10}
                        style={{ marginBottom: 6 }}
                    />
                    <Skeleton
                        animation="wave"
                        width="80%"
                        height={10}
                    />
                </React.Fragment>
            ) : (
                    <>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.data.price}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing className="p-2" >
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon className="text-red-700" />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon className="text-blue-700" />
                            </IconButton>
                        </CardActions>
                    </>
                )
            }
        </Card>
    );
}