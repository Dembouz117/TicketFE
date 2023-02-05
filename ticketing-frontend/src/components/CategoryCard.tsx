import { Box, useTheme, Typography, Button } from "@mui/material";
import { Remove } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

interface PropType{
    category: String,
    seat: number,
    price: number
}

const CategoryCard = ({category, seat, price}: PropType) => {
const theme = useTheme();

  return (
    <FlexBetween sx = {{width : "90%"}}>
        <Box
        sx = {{

            width: "90%",
            backgroundColor: theme.palette.background.alt,
            height: "auto",
            padding: "20px 20px 20px 20px",
            borderRadius:"2%",
            marginBottom: "2rem"
        }}
        >
        <FlexBetween>
        <Box>
          <Typography variant = "h2">Category: {category || "Uncharted"}</Typography>
          <Typography>{seat || 0}</Typography>
          <Typography>Price per seat: ${price || 0}</Typography>
        </Box>


        <Button variant = "contained" sx = {{backgroundColor: theme.palette.secondary[200]}}>
            <Remove sx = {{color: theme.palette.primary[100]}}/>
        </Button>
        </FlexBetween>
        </Box>
    </FlexBetween>
  )
}

export default CategoryCard