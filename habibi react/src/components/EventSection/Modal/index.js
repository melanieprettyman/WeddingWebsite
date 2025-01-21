

import React, {Fragment} from 'react';


import { Button, Dialog, Grid, } from '@mui/material'
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

const LocationMap = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    const DialogTitle = ((props) => {
        const { onClose } = props;
        return (
          <MuiDialogTitle>
            {onClose ? (
              <IconButton className='event-close-btn' aria-label="close" onClick={onClose}>
                <i className="ti-close"></i>
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });


    return (
        <Fragment>
            <Button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                See Location
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}> </DialogTitle>
                <Grid className="modalBody modal-body">
                    <Grid className="modalBody modal-body">
                        <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chateau%20Du%20Val,%2035550%20Saint-Just,%20France+(Ch%C3%A2teau%20du%20Val)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" ></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap


