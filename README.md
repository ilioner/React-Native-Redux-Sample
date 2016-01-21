# React-Native-Redux-Sampl

一个使用React-Native配合Redux框架做成的简单事项添加列表

做成过程遇到如下问题，并列出解决方法:

* 在2016年1月20日重新配置react-native后，此时版本为0.18.0，
  
  该版本无法在xcode编译成功。查阅论坛发现方法，将版本降到0.17.0编译通过。[https://github.com/facebook/react-native/issues/5191](https://github.com/facebook/react-native/issues/5191)
  
* 在进行Redux相关配置时，按照官方文档
  
  ``` javascript
  import {Provider} from 'react-redux/native'
  ```
  
  进行配置，程序运行error，修改配置后允许通过
  
  ``` javascript
  import {Provider} from 'react-redux/native'
  ```
  
  ​

做成过程参考文档:[http://camsong.github.io/redux-in-chinese/docs/basics/ExampleTodoList.html](http://camsong.github.io/redux-in-chinese/docs/basics/ExampleTodoList.html)

