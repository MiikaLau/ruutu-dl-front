import { styled } from "@mui/system";
import React from "react";
import { cssColors } from "../constants/colors";

interface Props {
    children: React.ReactNode;
}

export const Body: React.FC<Props> = (props) => {
    const Container = styled('div')(({ theme }) => ({
        maxWidth: '1024px',
        margin: 'auto',
        minHeight: '100vh',
        borderLeft: '2px ridge ' + cssColors.gray,
        borderRight: '2px ridge ' + cssColors.gray,
    }));

    return <Container>{props.children}</Container>
}