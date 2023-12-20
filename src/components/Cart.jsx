import { useState, useEffect } from 'react';
import { useCarrito } from "../context/CarritoContext";
import { Button, Box, Typography, Modal, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Cart = () => {
    const [openModal, setOpenModal] = useState(false);
    const { carrito, dispatch } = useCarrito();
    const [totalItems, setTotalItems] = useState(0);

    const handleClick = () => {
        setOpenModal(true)
    };

    const handleClose = () => {
        setOpenModal(false)
    };

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    useEffect(() => {
        // Calcula la cantidad total de productos en el carrito
        const total = carrito.selectedProducts.reduce((acc, product) => acc + product.quantity, 0);
        setTotalItems(total);
    }, [carrito.selectedProducts]);

    return (
        <Box sx={{display: "flex", justifyContent: "flex-end", pb: 1}}>
            <Button onClick={handleClick}>
                <AddShoppingCartIcon fontSize='large'/>
                <Typography>Cart</Typography>
                {totalItems > 0 && (
                    <Box
                        sx={{
                            backgroundColor: "red",
                            borderRadius: "50%",
                            color: "white",
                            width: "20px",
                            height: "20px",
                            ml: 0.3
                        }}
                    >
                        <Typography sx={{fontSize: "14px"}}>{totalItems}</Typography>
                        
                    </Box>
                )}
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
                    <Typography sx={{fontSize: "24px", fontWeight: "bold", textAlign: "center"}}>
                        Shopping Cart
                    </Typography>
                    <Divider sx={{borderWidth: "1px", my: 2}} />
                    <List>
                        {carrito.selectedProducts.map((product, index) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar alt={product.title} src={product.thumbnail}/>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography sx={{fontWeight: "bold", fontSize: "17px"}}>{product.title}</Typography>
                                    <Typography sx={{fontSize: "15px", fontWeight: "500"}}>Price: ${product.price.toFixed(2)}</Typography>
                                    <Typography sx={{fontSize: "14px", fontWeight: "300"}}>Qty: {product.quantity}</Typography> 
                                </ListItemText>
                                <Button color='error' onClick={() => removeFromCart(product)}>Remove</Button>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{borderWidth: "1px", my: 2}} />
                    <Typography sx={{pb: 1, fontWeight: "bold", textAlign:"center", fontSize: "18px"}}>Subtotal: ${carrito.total.toFixed(2)}</Typography>
                    <Divider sx={{borderWidth: "1px", my: 2}} />
                    <Button size='large' color='error' variant="contained" onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </Box>
    )
};