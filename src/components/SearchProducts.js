import React from 'react'
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";



const style = {
    color: "#f98181"
};
const size = {
    backgroundSize: "contain"
}

const SearchProducts = ({ data }) => {
    console.log(data)


    return (
        <div>
            <Card
                className="h-96 p-2 hover:shadow-3xl cursor-pointer focus:border-yellow-800"
            >
                <Link to={"/details/" + data.id}>
                    <div className="h-5/6 w-full">
                        <CardMedia
                            style={size}
                            className={"h-full w-full"}
                            image={data.photo}
                            title={data.title}
                        >
                            <img src={data.image} />
                        </CardMedia>
                    </div>
                    <div className="h-1/4 overflow-hidden">
                        <CardHeader className="p-1" subheader={data.description} />
                    </div>
                </Link>

                <div className="h-1/4">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.price}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default SearchProducts
