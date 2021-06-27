import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Axios from 'axios';
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345
    },
    color: {
        color: "blue"
    },
    media: {
        height: 200,
        // backgroundSize: "contain",
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
const style = {
    color: "#f98181"
};
const size = {
    backgroundSize: "contain"
}

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
                props.getProducts();
            }
        } catch (e) {
        }
    }

    return (
        <>
            {!product ? (
                <CircularProgress />
            ) : (
                <div className="h-96">
                    <Card
                        className={
                            classes.root +
                            " h-full p-2 hover:shadow-3xl cursor-pointer focus:border-yellow-800"
                        }
                    >
                        <Link to={"/details/" + product.id}>
                            <div className="h-3/6 w-full">
                                <CardMedia
                                    style={size}
                                    className={"h-full w-full"}
                                    image={product.photo}
                                    title={product.title}
                                />
                            </div>
                            <div className="h-1/4">
                                <CardHeader className="p-1" subheader={product.title} />
                            </div>
                        </Link>
                        <div className="h-1/4">
                            <CardActions disableSpacing className="h-1/2 p-1">
                                <IconButton
                                    style={loading ? style : null}
                                    disabled={loading}
                                    aria-label="add to favorites"
                                    onClick={prod => handleClick(product)}
                                    color={product.selected ? "secondary" : "default"}
                                >
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton 
                                    // style={loading ? style : null}
                                    // disabled={loading}
                                    // onClick={prod => oneClick(product)}
                                    // aria-label="share"
                                >
                                    <ShareIcon id="button"/>
                                </IconButton>
                            </CardActions>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {product.price}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
};