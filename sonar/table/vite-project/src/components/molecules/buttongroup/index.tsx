


import { HEADINGS } from '../../../utils/constants';

import { Container } from '@mui/material';

import {Buttons} from "../../atoms/button/index"

type Props = {
  onContractsClick: () => void;
  onCashKickClick: () => void;
};

export const ButtonGroupToggle = ({ onContractsClick, onCashKickClick }: Props) => (
    <Container>
    <Buttons onClick={onContractsClick}>{HEADINGS.CONTRACTS}</Buttons>
    <Buttons onClick={onCashKickClick}>{HEADINGS.CASH_KICK}</Buttons>
    </Container>
);
