import { products } from "./mocks/products.json";
import "./App.css";

//COMPONENTS
import { Container, Typography } from "@mui/material";
import { Products } from "./components/Products.jsx";

function App() {

  return (
    <Container component="div" maxWidth={false} sx={{ p: 2, backgroundColor: "aliceblue" }}>
      <Typography sx={{ textAlign: "center", fontWeight: "bold" }} variant='h3' component="h1">Shopping Cart 🛒</Typography>
      <Products products={products} />
    </Container>
  )
};

export default App;