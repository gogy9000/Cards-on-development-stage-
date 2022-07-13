import {ButtonStyled} from "./App";
import SuperCheckbox from "./component/super-checkbox/SuperCheckbox";
import SuperInputText from "./component/super-input/SuperInput";

export const Test = () => {
    return (
        <>
            <SuperInputText/>
            <ButtonStyled red>red</ButtonStyled>
            <SuperCheckbox/>
        </>
    )
}