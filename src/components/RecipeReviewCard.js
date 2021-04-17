import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Axios from 'axios';
import Card from "@material-ui/core/Card";
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
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 200,
        backgroundSize: "contain",
        paddingTop: "56.25%" // 16:9
    },
    // expand: {
    //     transform: "rotate(0deg)",
    //     marginLeft: "auto",
    //     transition: theme.transitions.create("transform", {
    //         duration: theme.transitions.duration.shortest
    //     })
    // },
    // expandOpen: {
    //     transform: "rotate(180deg)"
    // },
    // avatar: {
    //     backgroundColor: red[500]
    // }
}));
const style = {
    color: "#e85a7d"
};

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [product, setProduct] = React.useState();
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setProduct(props.data);
    }, []);
    let url = "https://laravel-react-eshop.herokuapp.com";

    const handleClick = async (prod) => {
        let newProduct = { ...prod, selected: !prod.selected };
        try {
            setLoading(true);
            let res = await Axios.put(`${url}/api/product/` + product.id, newProduct);
            if (res.data) {
                setLoading(false);
                setProduct(res.data);
            }
        }catch(e) {
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
                            " h-full hover:bg-gray-300 shadow-2xl hover:border-4 cursor-pointer"
                        }
                    >
                        <CardMedia
                            className={classes.media + " h-1/2"}
                            image={product.photo}
                            title={product.title}
                        />
                        <CardHeader className="h-1/5" subheader={product.title}/>
                        <CardActions disableSpacing className="h-1/6" >
                            <IconButton
                                style={loading ? style : null}
                                disabled={loading}
                                aria-label="add to favorites"
                                onClick={prod => handleClick(product)}
                                color={ product.selected ? "secondary" : "default"}
                            >
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share" edge="end">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
        </>
    );
}