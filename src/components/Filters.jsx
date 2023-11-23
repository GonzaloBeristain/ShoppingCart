import { useState } from "react";
import {  Box, Slider, InputLabel, FormControl, Select, MenuItem, Typography, Grid } from "@mui/material";

export const Filters = () => {
    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value);
    };

    return (
        <Box component="section" sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box component="div" sx={{ display: "flex", pt: 2 }}>
                <InputLabel htmlFor="price" sx={{ display: 'inline-block', pr: 2, pb:3.2, fontWeight: "bold", fontSize: "20px" }}>Price</InputLabel>
                <Slider onChange={handleChangeMinPrice} defaultValue={1800} max={1800} aria-label="Default" valueLabelDisplay="auto" sx={{ width: "200px", pt: 2 }} />
                <Typography sx={{fontWeight: "bold", pl: 2.3, pt: 0.5}}>${minPrice}</Typography>
            </Box>

            <Box component="div" sx={{ textAlign: { xs: 'left', sm: 'center' }, pb: 2 }}>
                <FormControl sx={{ width: "150px" }}>
                <InputLabel htmlFor="category" id="category" sx={{ fontWeight: "bold" }}>Category</InputLabel>
                    <Select labelId="category" id="category" label="category">
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="laptops">Laptops</MenuItem>
                        <MenuItem value="smartphones">Smartphones</MenuItem>
                        <MenuItem value="home-decoration">Home decoration</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
};