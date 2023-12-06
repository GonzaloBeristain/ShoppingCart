import { Box, Typography } from "@mui/material";
import { Filters } from "./Filters.jsx";
import { Cart } from "./Cart.jsx"

export const Header = ({ changeFilters }) => {
    return(
        <Box component="header">
            <Typography sx={{ textAlign: "center", fontWeight: "bold", fontSize: {xs: "40px", sm: "60px"} }} variant='h3' component="h1">Shopping Cart 🛒</Typography>
            <Cart />
            <Filters onChange={changeFilters} />
        </Box>
    )
};