import { useCarrito } from "../context/CarritoContext";
import { Typography, Grid, Card, CardMedia, CardContent, Box, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const Products = ({ products }) => {
    const { dispatch } = useCarrito();

    const handleClickProduct = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }

    return (
        <Box>
            <Grid container spacing={2} sx={{ pt: 0}}>
            {products.map(product => 
                <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
                    <Card key={product.id} sx={{ border: 2, borderRadius: "10px" }}>
                        <CardMedia 
                            component="img"
                            height={170}
                            image={product.thumbnail}
                            alt={product.title}
                        />
                        <CardContent sx={{ borderTop: 2, height: "260px" }}>
                            <Typography variant='h5' sx={{height: 60}}>{product.title}</Typography>
                            <Typography variant='body2' sx={{padding: "10px 0px 0px 0px", height: 90}}>{product.description}</Typography>
                            <Typography variant='body1' sx={{fontWeight: "bold", pb: 2}}>Price: ${product.price}</Typography>
                            <Box sx={{textAlign: "center"}}>
                                <Button onClick={() => handleClickProduct(product)} variant="contained" size="small" startIcon={<AddShoppingCartIcon />}>ADD TO CART</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                )}
            </Grid>
        </Box>
    )
};