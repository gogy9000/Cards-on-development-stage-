import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import styled from "styled-components";


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>& {
    red?: boolean
}


export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const s ={
    //     red:'red',
    //     default:{}
    // }
    // const finalClassName = `${red ? s.red : s.default} ${className}`

    //
    //
    //
    return (
        <>
            {/*@ts-ignore*/}
            <button

                {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            />
        </>
    )
}


