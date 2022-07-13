import styled from "styled-components"
import {App} from "../App"

export const AppStyled = styled(App).attrs({color:'dark'})`
  background: ${(props) => {
    if (props.color === 'light') {
        return props.theme.colors.light
    }
    if (props.theme.colors === 'dark') {
        return props.theme.colors.dark
    }
}
};
  border-color: black;
  border-style: solid;
`