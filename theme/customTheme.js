import commonColor from '../native-base-theme/variables/commonColor'
import { Platform } from 'react-native';
const platform = Platform.OS;

const customCommonColor = {
    ...commonColor,
    // toolbarDefaultBg: '#FF0000',
    brandPrimary: platform === "ios" ? '#144EFC' : '#144EFC',
    get buttonPrimaryBg() {
        return this.brandPrimary
    }
}   

export default customCommonColor;