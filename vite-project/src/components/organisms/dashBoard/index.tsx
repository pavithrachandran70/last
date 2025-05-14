import { Typography } from "@mui/material";
import { useState } from "react"
import { ContractsTable } from "../contractstable";
import { CashKickTable } from "../cashkicktable";
import { ButtonGroupToggle } from '../../molecules/buttongroup';
import { HEADINGS } from '../../../utils/constants';




export const DashBoard=()=>{
    const[selected,setSelected]=useState<'contracts'|'cashkick'>('contracts');
    return (
        <>
        <Typography>{HEADINGS.MAIN}</Typography>
        <ButtonGroupToggle
         onContractsClick={() => setSelected('contracts')}
         onCashKickClick={() => setSelected('cashkick')}
         />
         {selected==="contracts"?  <ContractsTable/> :<CashKickTable/>}

        </>
    );
};