import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {height , width} = Dimensions.get('window');

const styles = StyleSheet.create({
  
    headerMain:{
        height:height*0.064,
        flexDirection:'row',
        backgroundColor:'#F7D102',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerOne:{
        height:height*0.064,
        width:'81%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'3%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25
    }
    ,
    headerOneView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:2,
        height:height*0.035,

    },
    image : {
        width: 30,
        height: 30,
    },
    headerTwo:{
        width:'20%',
        height:height*0.065,
        flexDirection:'column',
        justifyContent:'center',
        paddingRight:10
    }
    


});

export default styles;