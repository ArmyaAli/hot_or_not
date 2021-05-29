import React from 'react'

export interface ButtonProps {
    Text: string;
}
export const MenuButton = (props: ButtonProps) => {
    return (
    <div>
        <button>{props.Text}</button>
    </div>
    )
}