import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';

const notifications = [
    {
        id: 0,
        label: 'First notification'
    },
    {
        id: 1,
        label: 'Second notification'
    },
    {
        id: 1,
        label: 'Thrirt notification'
    },
];

const NotificationBell = ({ iconColor }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const newNotifications = `You have ${notifications.length} new notifications!`;
    const noNotifications = 'No new notifications';

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>{/**Si hay notificaciones le mandamos el tamaño de notificaiones, caso contrario mostramos el mensaje */}
            <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : null}
                    anchorEl={anchorEl}
                >
                    {/**Muestra en el contenido el tamaño de la notificación */}
                    <Badge
                        badgeContent={notifications.length}
                        color="error"
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
            />
        </div>
    )
}

export default NotificationBell