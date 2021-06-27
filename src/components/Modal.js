import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddProduct from '../Pages/AddProducts';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Modal(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const checkProps = () => {
        let emptyTitleProps;
        if (props.title1 === undefined &&
            props.title2 === undefined &&
            props.title3 === undefined &&
            props.title4 === undefined &&
            props.title5 === undefined
        ) {
            emptyTitleProps = true;
        } else {
            emptyTitleProps = false;
        }
        return emptyTitleProps;
    }

    const style = {
        padding: "0"
    }

    return (
        <div className={checkProps() ? null : "m-5"}>
            <Card className={
                checkProps() ? "" :
                    classes.root}>
                {
                    checkProps() ? null : (
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {props.title1}
                            </Typography>
                            <Typography>
                                {props.title2}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {props.title3}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {props.title4}
                                <br />
                                {props.title5}
                            </Typography>
                        </CardContent>
                    )
                }
                <CardActions
                style={checkProps() ? style : null}
                >
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        {props.openBtn}
                    </Button>
                </CardActions>
            </Card>


            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {props.modalHeaderTitle}
                </DialogTitle>
                <DialogContent dividers>
                    {/* <AddProduct 
                        createProduct={props.data.createProduct}
                        categories={props.data.categories}
                        brands={props.data.brands}
                    /> */}
                    {props.component}
                </DialogContent>
                <DialogActions>
                    {props.bottomBtn ? props.bottomBtn : (
                    <Button autoFocus onClick={handleClose} color={props.btnColor ? props.btnColor : "primary"}>
                        {props.ButtonText ? props.ButtonText : "Перейти в корзину"}
                    </Button>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
}