import { useState } from 'react';
import { Button, Box, Typography, Modal } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Cart = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Box sx={{display: "flex", justifyContent: "flex-end", pb: 1}}>
            <Button onClick={handleClick}>
                <AddShoppingCartIcon fontSize='large'/>
                <Typography>Cart</Typography>
            </Button>

            <Modal open={openModal} onClose={handleClose}>
                <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
                >
                    <Typography>
                        Productos
                    </Typography>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </Box>
        
    )
}
