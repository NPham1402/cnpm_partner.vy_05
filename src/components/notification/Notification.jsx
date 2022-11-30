import { Alert } from '@mui/material';
import React from 'react';

function Notification(props) {
    return (
       <Alert severity={props.type}>{props.title}</Alert>
    );
}

export default Notification;