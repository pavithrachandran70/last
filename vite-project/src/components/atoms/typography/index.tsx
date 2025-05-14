import { Typography } from "@mui/material";

type Typo={
    label:string;
}
export const Text=({label}:Typo)=>{
    <Typography variant="h3">
    {label}
    </Typography>
}