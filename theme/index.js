import customCommonColor from "./customTheme";
// import getTheme from "../native-base-theme/components";
import getTheme from '../native-base-theme/components';
import textTheme from "../native-base-theme/components/Text";
import contentTheme from "../native-base-theme/components/Content";
import merge from "lodash/merge";

const theme = () =>{
    const nbTheme = getTheme(customCommonColor);  
    const overrides = {
        "NativeBase.Text": {
            ...textTheme(),
            ".link":{
                color: '#00ff7b'
            }
        },
        "NativeBase.Content": {
            ...contentTheme(),
            ".ContentStyle":{
                marginLeft: 15,
                marginRight: 15
            }
        }
    } 
    return merge(nbTheme, overrides)
}
export default theme;