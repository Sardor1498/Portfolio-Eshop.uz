import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Axios from "axios";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Skeleton from "@material-ui/lab/Skeleton";
import StarIcon from '@material-ui/icons/Star';
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
// import CircularProgress from "@material-ui/core/CircularProgress";

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
    const [selected, setSelected] = React.useState(false);
    const [product, setProduct] = React.useState({
        id: "",
        created_at: "",
        updated_at: "",
        title: "",
        description: "",
        price: "",
        availability: null,
        photo: "",
        categoryId: "",
        brandId: "",
        brandName: "",
        selected: null
    });


    React.useEffect(() => {
        setProduct(props.data);
    }, []);

    const handleClick = async () => {
        setProduct({
            ...product,
            selected: !product.selected
        });

        console.log([...product]);
        try {
            let res = await axios.put(`products`, { product });
            console.log(res);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            {!product ? (
                <CircularProgress />
                
            ) : (

                <Card
                    className={
                        classes.root +
                        " h-full w-full hover:border-4 cursor-pointer focus:border-yellow-800"
                    }
                >
                    <Link to={"/details/" + product.id} >
                        <CardMedia
                            className={classes.media + " h-80"}
                            image={props.data.photo}
                            title={props.data.title}
                        />
                        <CardHeader className="p-1" subheader={
                            props.data.title
                        }
                        />
                    </Link>
                    <>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.data.price}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing className="p-2" >
                            <IconButton
                                aria-label="add to favorites"
                                onClick={id => handleClick(props.data.id)}
                                color={selected ? "secondary" : "default"}
                            >
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon className="text-blue-700" />
                            </IconButton>
                        </CardActions>
                    </>
                </Card>
            )}
        </>
    );
}