import { useState } from 'react';
import { useCarrito } from "../context/CarritoContext";
import { Button, Box, Typography, Modal } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Cart = () => {
    const [openModal, setOpenModal] = useState(false);
    const { carrito, dispatch } = useCarrito();

    const handleClick = () => {
        setOpenModal(true)
    };

    const handleClose = () => {
        setOpenModal(false)
    };

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

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
                    <ul>
                        {carrito.selectedProducts.map((product, index) => (
                            <li key={index}>
                                {product.title}{' '}
                                <Button onClick={() => removeFromCart(product)}>Remove</Button>
                            </li>
                        ))}
                    </ul>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </Box>
        
    )
};