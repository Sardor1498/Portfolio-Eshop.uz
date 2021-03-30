// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import StarIcon from '@material-ui/icons/Star';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
// import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import classes from '*.module.scss';



// const services = [
//     {
//         name: "Iphone X",
//         titlee: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, id?",
//         url: "Share",
//         button: "Learn More",
//         images: "https://img.pngio.com/iphone-x-iphone-8-apple-facetime-lte-iphone-10-png-download-iphone-x-png-900_600.jpg"
//     },
//     {
//         name: "Iphone 11pro",
//         titlee: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, id?",
//         url: "Share",
//         button: "Learn More",
//         images: "https://img.pngio.com/iphone-x-iphone-8-apple-facetime-lte-iphone-10-png-download-iphone-x-png-900_600.jpg"
//     },
//     {
//         name: "Alcatel",
//         titlee: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, id?",
//         url: "Share",
//         button: "Learn More",
//         images: "https://img.pngio.com/iphone-x-iphone-8-apple-facetime-lte-iphone-10-png-download-iphone-x-png-900_600.jpg"
//     },
//     {
//         name: "Samsung A51",
//         titlee: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, id?",
//         url: "Share",
//         button: "Learn More",
//         images: "https://img.pngio.com/iphone-x-iphone-8-apple-facetime-lte-iphone-10-png-download-iphone-x-png-900_600.jpg"
//     },
//     {
//         name: "Samsung S20",
//         titlee: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, id?",
//         url: "Share",
//         button: "Learn More",
//         images: "https://img.pngio.com/iphone-x-iphone-8-apple-facetime-lte-iphone-10-png-download-iphone-x-png-900_600.jpg"
//     },
// ];

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
// });

// // ....

// // className "owl-theme" is optional
// const OnSale = () => {
//     const classes = useStyles();
//     return (
//         <OwlCarousel className='owl-theme' loop margin={10} nav>
//             <Card className={classes.root} className="flex justify-center m-3">
//                 {services.map((service, index) => (
//                     <div key={index}>
//                         <CardActionArea>
//                             <CardMedia
//                                 component="img"
//                                 alt="Iphone X"
//                                 height="140"
//                                 image={service.images}
//                                 title={service.name}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="h2">{service.name}</Typography>
//                                 <Typography variant="body2" color="textSecondary" component="p">{service.titlee}</Typography>
//                             </CardContent>
//                         </CardActionArea>
//                         <div className="text-yellow-300">
//                             <StarIcon />
//                             <StarIcon />
//                             <StarIcon />
//                             <StarHalfIcon />
//                             <StarOutlineIcon />
//                         </div>
//                         <CardActions>
//                             <Button size="small" color="primary">{service.url}</Button>
//                             <Button size="small" color="primary">{service.button}</Button>
//                         </CardActions>
//                         <hr />
//                     </div>
//                 ))}
//             </Card>
//         </OwlCarousel>
//     )
// };

// export default OnSale;
