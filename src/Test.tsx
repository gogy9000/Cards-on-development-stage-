import SuperCheckbox from "./component/super-checkbox/SuperCheckbox";
import SuperInputText from "./component/super-input/SuperInput";
import { ButtonStyled } from "./styled-components/StyledButtons";

export const Test = () => {
    return (
        <>
            <SuperInputText/>
            <ButtonStyled red>red</ButtonStyled>
            <SuperCheckbox/>
        </>
    )
}