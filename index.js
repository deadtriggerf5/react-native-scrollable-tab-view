import {Platform} from 'react-native';
import Android from './android';
import Ios from './ios';

if(Platform.OS === 'android'){
    module.exports = Android;
} else {
    module.exports = Ios;
}