import { FC } from "react";
import MUICheckbox, { CheckboxProps as MUICheckboxProps } from "@mui/material/Checkbox";

export type ButtonProps = {
} & MUICheckboxProps;

const Button: FC<ButtonProps> = (props) => {
    const {
        ...muiProps
    } = props;
    return (
        <MUICheckbox {...muiProps}>
        </MUICheckbox>
    );
};
export default Button;
