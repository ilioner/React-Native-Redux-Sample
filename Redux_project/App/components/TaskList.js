/**
 * Created by Tywin on 16/1/20.
 */
import React from 'react-native';

const { Component, View, Text ,ListView, StyleSheet,Image} = React;

class TaskList extends Component {
    // 默认属性
    static defaultProps = {};

    // 属性类型
    static propTypes = {};

    // 构造
    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 初始状态
        this.dataSource.cloneWithRows(['row 1', 'row 2'])
    }

    // 自定义方法
    handle() {

    }

    _renderRow(rowData){

        return (
            <View style = {styles.cellContentStyle}>
                <Text style = {styles.titleStyle}>{'提醒事项:'+rowData.itemTitle}</Text>
                <Text style = {styles.timeSyle}>{'创建时间:'+rowData.createTime}</Text>
                <View style = {styles.lineStyle}/>
            </View>
        );
    }

    // 渲染
    render() {

        if (this.props.taskItems.length != 0){
            this.dataSource = this.dataSource.cloneWithRows(this.props.taskItems);
            return (
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    />
            );
        }else {
            return (
                <View style = { styles.imageViewStyle}>
                    <Image style = { styles.imageStyle} source={require('../resource/pic.jpeg')}/>
                    <Text style = {styles.imageViewTitle}>然而,你并没有创建任何事项</Text>
                </View>
            );
        }
    }

}

const styles = StyleSheet.create({
    cellContentStyle:{
        flex:1,
        height:45
    },
    titleStyle:{
        fontSize:14,
        marginTop:2,
        marginLeft:5,
        color:'#5F5F70'
    },
    timeSyle:{
        fontSize:12,
        marginTop:5,
        marginLeft:5,
        color:'#5F5F70'
    },
    lineStyle:{
        height:1,
        backgroundColor:'#ECECEC',
        marginBottom:0
    },
    imageViewStyle:{
        flex:1,
        alignItems:'center'
    },
    imageStyle:{
        width:200,
        height:250,
    },
    imageViewTitle:{
        fontSize:20,
        color:'#5F5F70'
    }

});

export default TaskList;
