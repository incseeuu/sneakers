import React from 'react';
import {Button} from "@mui/material";

type Props = {
    title: string
    callback: () => void
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    variant?: 'text' | 'outlined' | 'contained'
    size?: 'small' | 'medium' | 'large'
}

const CustomButton = ({callback, title, variant, color, size}: Props) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <Button
            size={size ? size : 'medium'}
            color={color ? color : 'inherit'}
            variant={variant ? variant : 'outlined'}
            sx={{borderRadius: 0, textTransform: 'none', minWidth: '5rem', fontFamily: 'myFont, sans-serif !important'}}
            onClick={onClickHandler}>
            {title}
        </Button>
    );
};

export default CustomButton;