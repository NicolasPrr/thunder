import commonColor from '../native-base-theme/variables/commonColor'
import { Platform } from 'react-native';
const platform = Platform.OS;

const customCommonColor = {
    ...commonColor,
    // toolbarDefaultBg: '#FF0000',
    brandPrimary: platform === "ios" ? '#A88B48' : '#A88B48',
    get buttonPrimaryBg() {
        return this.brandPrimary
    }
}   

export default customCommonColor;