import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import "./App.css";

//COMPONENTS
import { Container, Typography } from "@mui/material";
import { Products } from "./components/Products.jsx";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === "all" ||
          product.category === filters.category
        )
      )
    })
  };

  const filteredProducts = filterProducts(products);

  return (
    <Container component="div" maxWidth={false} sx={{ p: 2, backgroundColor: "aliceblue" }}>
      <Typography sx={{ textAlign: "center", fontWeight: "bold" }} variant='h3' component="h1">Shopping Cart 🛒</Typography>
      <Products products={filteredProducts} />
    </Container>
  )
};

export default App;