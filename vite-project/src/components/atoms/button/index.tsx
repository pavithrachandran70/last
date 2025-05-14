


import { Button } from "@mui/material"

type Props={
    children:React.ReactNode;
    variant?:"outlined"|"text"|"contained";
    onClick:()=>void;
};


export const Buttons=({children,onClick,variant="text"}:Props)=>{
    return(
    <Button variant={variant} onClick={onClick}>{children}</Button>
    )
}