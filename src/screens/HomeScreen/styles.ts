import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {height , width} = Dimensions.get('window');

const styles = StyleSheet.create({
  
    headerMain: {
        height : height * 0.064,
        backgroundColor: '#F7D102',

    },
    headerOne: {
        height : height * 0.064,
        backgroundColor: 'white',
        width: '80%',
        flexDirection: 'row',
        paddingHorizontal : '3%',
        alignItems: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,

    },
    headerOneView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        borderLeftColor : '#f3f2fd',
        borderLeftWidth: 2,
        paddingLeft: 8,
        
    },
    image : {
        width: 30,
        height: 30,
        
    },
    


});

export default styles;