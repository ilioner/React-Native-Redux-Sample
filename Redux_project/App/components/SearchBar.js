/**
 * Created by Tywin on 16/1/20.
 */
'use strict';
import React from 'react-native';

const {
    Component,
    View,
    Text ,
    TextInput,
    TouchableOpacity,
    StyleSheet

} = React;
import Base from '../base/Base';

class SearchBar extends Component {
    // 属性类型
    static propTypes = {
        onClickAdd:React.PropTypes.func.isRequired
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            keyword:''
        };
    }
    _pressAction(){
        if(this.state.keyword.trim().length!=0){
            this.props.onClickAdd(this.state.keyword);
            this.setState({
                keyword:''
            });
        }
    }
    // 渲染
    render() {
        return (
            <View style = {styles.contentStyle}>
                <TextInput
                    ref="keywordsRef"
                    style = {styles.textInputStyle}
                    placeholder = '添加新的事项'
                    onChangeText = {(text)=>this.setState({
                        keyword:text
                    }
                    )}
                    value = {
                        this.state.keyword
                    }/>
                <TouchableOpacity onPress={this._pressAction.bind(this)}>
                    <Text style = {styles.buttonStyle}>
                        添加
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    contentStyle:{
        height:64,
        backgroundColor:'#0093E9',
        flexDirection:'row'
    },
    textInputStyle:{
        marginTop:24,
        marginLeft:10,
        height:30,
        width:Base.Screen_w - 70,
        backgroundColor:'#FFFFFF',
        borderRadius:3
    },
    buttonStyle:{
        height:30,
        marginTop:30,
        marginLeft:5,
        marginRight:5,
        color:'#FFFFFF',
        fontSize:18
    }
});

export default SearchBar;
