# 小程序基础知识

## 组件引用

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210702224454454.png" alt="image-20210702224454454" style="zoom:50%;" />

## 尺寸设计rpx、px、pt、vm、em

特点:

rpx：自适应，如果设计稿按照iphone6尺寸，则是实际代码和图片尺寸一致，使用rpx，适用于图片等

px：所有机型固定只存，适用于文字等

## 全局wxss默认配置

> 1.只有font和color能被继承
>
> 2.页面page是可以继承全局样式

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704160251743.png" alt="image-20210704160251743" style="zoom:50%;" />



## 组件

### like

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704171707263.png" alt="image-20210704171707263" style="zoom:50%;" />

- 事件

  ![image-20210704175408999](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704175408999.png)

  ![image-20210704175342902](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704175342902.png)

- 三元表达式

  可以写在{{}}里面，也可以写在src里面

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704180159167.png" alt="image-20210704180159167" style="zoom:50%;" />

### 组件属性

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704182708351.png" alt="image-20210704182708351" style="zoom:50%;" />



## 封装组件思路（哪些封装在一起）

![image-20210704182942934](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704182942934.png)

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704182836535.png" alt="image-20210704182836535" style="zoom:50%;" />



## api

- request

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704201326598.png" alt="image-20210704201326598" style="zoom:50%;" />

- 封装request

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704203452288.png" alt="image-20210704203452288" style="zoom:50%;" />

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704203846452.png" alt="image-20210704203846452" style="zoom:50%;" />

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704210618412.png" alt="image-20210704210618412" style="zoom:50%;" />

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704210824945.png" alt="image-20210704210824945" style="zoom:50%;" />

- bug
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  - startWith，code不是字符串
  - 导入用相对路径



## 错误处理

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704214827184.png" alt="image-20210704214827184" style="zoom:50%;" />

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704214907349.png" alt="image-20210704214907349" style="zoom:50%;" />





## model再次优化代码

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704215409693.png" alt="image-20210704215409693" style="zoom:50%;" />

## 从回调函数到promise

- 回调函数（剥夺函数return能力）

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704215536559.png" alt="image-20210704215536559" style="zoom:50%;" />

- 数据绑定

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704220141938.png" alt="image-20210704220141938" style="zoom:50%;" />

- 使用数据

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704220216848.png" alt="image-20210704220216848" style="zoom:50%;" />

- 数据绑定流程图

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704220612900.png" alt="image-20210704220612900" style="zoom:50%;" />





业务逻辑如何封装

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705162134466.png" alt="image-20210705162134466" style="zoom:50%;" />

- promise优势

  ![image-20210707171059535](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707171059535.png)

- 重构工具类HTTP

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707172818251.png" alt="image-20210707172818251" style="zoom:50%;" />









## 不同编译模型

![image-20210707210024519](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707210024519.png)



## 插槽

插槽思想非常灵活，不论是数据还是样式都是调用方传入的

- 编写插槽

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707221525133.png" alt="image-20210707221525133" style="zoom:50%;" />

- 在组件中传入

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707221552047.png" alt="image-20210707221552047" style="zoom:50%;" />

- 启用插槽

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707221609564.png" alt="image-20210707221609564" style="zoom:50%;" />

### 问题

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707222533245.png" alt="image-20210707222533245" style="zoom:50%;" />

原因是这样设置样式系统无法识别到底对自定义组件的哪个标签设置样式

因此需要进一步详细指定标签

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707222902950.png" alt="image-20210707222902950" style="zoom:50%;" />

> **后代选择器与子元素选择器的区别**
> 1.连接符号
> 1.后代选择器用空格作为连接符号
>
> 2.子元素选择器用>作为连接符号
>
> 2.选中标签范围
> 1.后代选择器会选中指定标签中，所有的特定后代标签，也就是会选中儿子，孙子，只有放到标签中的特定标签都能选中
>
> 2.子元素选择器只会选中指定标签中，所有特定的直接标签，也就是只会选中特定的儿子标签
>
> 3.相同点
> 1.后代选择器和子元素标签都可以使用标签名称/id名称/类名称等作为选择器
>
> 2.后代选择器和子元素标签都可以通过各自的符号一直延续下去
>
> 4.在企业开发中如何选择
> 1.如果想选中指定标签中的所有指定标签，那么就使用后代选择器
>
> 2.如果想选择指定标签中的所有特定的儿子标签，那么就使用子元素选择器



## 自定义样式externalClass

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707225256379.png" alt="image-20210707225256379" style="zoom:50%;" />

- 组件定义外部样式

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707230146424.png" alt="image-20210707230146424" style="zoom:50%;" />

- wxml添加定义样式类名称

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707230102231.png" alt="image-20210707230102231" style="zoom:50%;" />

- page传递样式类

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707230036508.png" alt="image-20210707230036508" style="zoom:50%;" />

### 问题

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707230840674.png" alt="image-20210707230840674" style="zoom:57%;" />

解决方法：

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707231700941.png" alt="image-20210707231700941" style="zoom:50%;" />

保证index1和2采用不同的样式类

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707231913744.png" alt="image-20210707231913744" style="zoom:50%;" />



## 解析\\n



<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707233536662.png" alt="image-20210707233536662" style="zoom:80%;" />

正则

```js
str.replace(/\\n/g,'\n')
```





















































































































# 业务

## 配置app.json

## like组件

![image-20210705164230191](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705164230191.png)



## 封装http访问请求

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705165340402.png" alt="image-20210705165340402" style="zoom:50%;" />



## 建立业务模型

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705173119968.png" alt="image-20210705173119968" style="zoom:50%;" />

## 建立movie组件

- 编写组件
- 在json中注册
- 通过page通讯

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705195552394.png" alt="image-20210705195552394" style="zoom:50%;" />

## 点赞自定义事件

- 解决问题：子向父组件通讯

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705195958154.png" alt="image-20210705195958154" style="zoom:50%;" />

- 监听

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705200301652.png" alt="image-20210705200301652" style="zoom:50%;" />

- 建立like处理model

- 在classic Page中执行

  - 注意之前的param.success







- 问题

  - data初始化

  ![image-20210705201002275](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705201002275.png)

  - 初始化data和properties

    ![image-20210705201727864](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705201727864.png)	

  - 业务逻辑写在组件内部还是外部（08业务逻辑）

    <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705202008372.png" alt="image-20210705202008372" style="zoom:50%;" />

  - 内存泄漏

    - 点赞逻辑在组件内实现---决定采用observe

    - 数字型自动08转为8

    - 字符串无线调用出现内存泄漏

      ![image-20210705205527194](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705205527194.png)

      ![image-20210705205638538](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705205638538.png)

  - flex布局的navi记得设置宽高

    <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705211853424.png" alt="image-20210705211853424" style="zoom:50%;" />

  - 三角形用css去做比较好一点

- 问题

  点赞这里的状态不是可以从服务端返回的数据中查到吗？

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706215758381.png" alt="image-20210706215758381" style="zoom:70%;" />

  ![image-20210706215815191](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706215815191.png)

  我这里直接从classic中查到状态，并且通过状态判断，如果like_status是0采用like，如果like_status是1采用cancel的api，不需要event里面的behavior

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706215834844.png" alt="image-20210706215834844" style="zoom:50%;" />

- 解答：

  我知道了。我这样写第一次点赞可以成功，再点一次的话还是会发送like请求，而不是cancel，因为classic里面的like_status不会改变

  ![image-20210706215901441](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706215901441.png)









## behavior

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705225452949.png" alt="image-20210705225452949" style="zoom:50%;" />

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705225605636.png" alt="image-20210705225605636" style="zoom:50%;" />

![image-20210705231136432](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705231136432.png)



## 生命周期

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706194116288.png" alt="image-20210706194116288" style="zoom:70%;" />





## 页面切换

- 底部button不能变化

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705232550954.png" alt="image-20210705232550954" style="zoom:50%;" />

  注意清除缓存再编译

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210705232721449.png" alt="image-20210705232721449" style="zoom:50%;" />

## 缓存

![image-20210706215229978](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706215229978.png)

- 缓存带来的问题

  哪些数据可以缓存，哪些不能缓存

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706215956624.png" alt="image-20210706215956624" style="zoom:50%;" />

  - 单独修改like和fav_nums

## hidden和wx:if

- 自定义组件不支持hidden，因为小程序可能认为hidden是用户自定义属性

  解决方法：绑定一个属性hidden，绑定hidden到组件的view上，最后在page传递hidden数值

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706222423183.png" alt="image-20210706222423183" style="zoom:50%;" />

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706222513898.png" alt="image-20210706222513898" style="zoom:50%;" />

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706222435674.png" alt="image-20210706222435674" style="zoom:50%;" />

- if和hidden区别

  ![image-20210706222624912](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706222624912.png)

  注意hidden不会触发detached，wx:if可以

## 复用wxss

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706224357303.png" alt="image-20210706224357303" style="zoom:67%;" />



## 音乐播放

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706225414553.png" alt="image-20210706225414553" style="zoom:50%;" />

- 重要

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706225517602.png" alt="image-20210706225517602" style="zoom:50%;" />

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706225543839.png" alt="image-20210706225543839" style="zoom:50%;" />

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706225553726.png" alt="image-20210706225553726" style="zoom:50%;" />



- 问题：

  - 1、切换组件时实现音乐暂停，播放图片切换

    方法1：子组件传递给父组件信息，父组件再绑定回子组件

    方法2：切换组件触发生命周期函数（注意hidden不会触发，如果使用wx：if的话，组件会从头走一遍声明周期，因此初始化的playing变量也变成false，顺利实现播放图片切换）

  - 2、实现背景音乐一直播放，且播放图片保持正确

    方法1、注意版本2.2.3已经支持show的生命周期了

    方法2：<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706232025293.png" alt="image-20210706232025293" style="zoom:50%;" />

    方法3：（提示：不要在生命周期里写业务逻辑） 

    <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706232221253.png" alt="image-20210706232221253" style="zoom:50%;" />

    <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706232239581.png" alt="image-20210706232239581" style="zoom:50%;" />

  - 3、音乐总控开关控制要和页面对应

    - 监听总控开关

      attached内部调用
<<<<<<< HEAD
    
    - 调用onPlay、onPause等api
    
    <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706232748436.png" alt="image-20210706232748436" style="zoom:50%;" />
    
    - 问题：当点击play按钮时图片先变成播放又变成停止
    
      分析如下：
    
      ①当前页面有两个元素被监控，分别是player-img和mMgr
    
      <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709214939363.png" alt="image-20210709214939363" style="zoom:50%;" />
    
      <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709214924937.png" alt="image-20210709214924937" style="zoom:50%;" />
    
      ②如下图，点击player-img触发onPlay函数，进行mMgr的src赋值，注意！！！该赋值触发了被监听的mMgr.onPlay函数
    
      ，而该函数又调用了_recoverStatus()函数。此时playing参数为false，因为mMgr.onPlay函数可能由于微任务的原因被调到onPlay函数执行完后执行。因此，playing先被onPlay函数设置成true，在被mMgr.onPlay函数
    
      的_recoverStatus()函数设置成false
    
=======

    - 调用onPlay、onPause等api

    <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210706232748436.png" alt="image-20210706232748436" style="zoom:50%;" />

    - 问题：当点击play按钮时图片先变成播放又变成停止

      分析如下：

      ①当前页面有两个元素被监控，分别是player-img和mMgr

      <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709214939363.png" alt="image-20210709214939363" style="zoom:50%;" />

      <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709214924937.png" alt="image-20210709214924937" style="zoom:50%;" />

      ②如下图，点击player-img触发onPlay函数，进行mMgr的src赋值，注意！！！该赋值触发了被监听的mMgr.onPlay函数

      ，而该函数又调用了_recoverStatus()函数。此时playing参数为false，因为mMgr.onPlay函数可能由于微任务的原因被调到onPlay函数执行完后执行。因此，playing先被onPlay函数设置成true，在被mMgr.onPlay函数

      的_recoverStatus()函数设置成false

>>>>>>> refs/remotes/origin/main
      <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709214751322.png" alt="image-20210709214751322" style="zoom:50%;" />



## book组件

固定

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707201202515.png" alt="image-20210707201202515" style="zoom:50%;" />

key提高渲染效率

![image-20210707203840529](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707203840529.png)



组件与页面通讯

![image-20210707204910625](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210707204910625.png)

- 讨论：项目型组件和组件的通用性

  上述图片在组件内部写死了跳转逻辑，虽然方便但是降低组件的通用性

  可以采取自定义事件来发送book.id在组件之外编写逻辑

## wx.request包装成promise

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709224737461.png" alt="image-20210709224737461" style="zoom:67%;" />



## wxs

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709000637389.png" alt="image-20210709000637389" style="zoom:80%;" />

- wxs编写（仿照es5）

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709000842205.png" alt="image-20210709000842205" style="zoom:50%;" />

  

- wxml应用

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709000739184.png" alt="image-20210709000739184" style="zoom:50%;" />

- 处理换行和首行缩进

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709001958245.png" alt="image-20210709001958245" style="zoom:67%;" />

- 过滤器

  <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210709002334402.png" alt="image-20210709002334402" style="zoom:50%;" />



## 评论+1添加评论

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210710232026140.png" alt="image-20210710232026140" style="zoom:50%;" />



## promise.all、race

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711084840465.png" alt="image-20210711084840465" style="zoom:50%;" />



## 设计模式---组件---models

到底model写在component里面还是写在外面的models文件夹更好？

- 考虑复用性
- 考虑业务



## page和component体验

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711102229825.png" alt="image-20210711102229825" style="zoom:50%;" />

## 请求结果锁、节流、防止发送无效数据



## load_more封装behavior

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711144121798.png" alt="image-20210711144121798" style="zoom:33%;" />

三种方法判断是否到头。total，数组长度，两次数据访问结果





## 解决断网再联网，无法发送数据

加锁后，断网无法解锁。

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711150704367.png" alt="image-20210711150704367" style="zoom:50%;" />

![image-20210711150820369](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711150820369.png)



## 不同搜索书籍切换时仍显示上一次书籍信息且loading图标仍然存在

数据绑定

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711151602829.png" alt="image-20210711151602829" style="zoom:50%;" />

![image-20210711151725923](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711151725923.png)

## 处理空搜索情况

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711152008509.png" alt="image-20210711152008509" style="zoom:50%;" />

## 用户头像圆形

![image-20210711160433557](C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210711160433557.png)











































# 其他

### 开发者工具



### 小程序开发结构

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210701211955056.png" alt="image-20210701211955056" style="zoom:50%;" />

## ES6

### this

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704201746347.png" alt="image-20210704201746347" style="zoom:50%;" />

解决1

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704201807676.png" alt="image-20210704201807676" style="zoom:50%;" />

解决2：	

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704201840447.png" alt="image-20210704201840447" style="zoom:50%;" />

### promise

解决问题：

1. 回调地狱：

<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704202538150.png" alt="image-20210704202538150" style="zoom:50%;" />

2. 提供return能力  

   <img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704203452288.png" alt="image-20210704203452288" style="zoom:50%;" />



### export

<<<<<<< HEAD
<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704203409721.png" alt="image-20210704203409721" style="zoom:50%;" />
=======
<img src="C:\Users\Skinner\AppData\Roaming\Typora\typora-user-images\image-20210704203409721.png" alt="image-20210704203409721" style="zoom:50%;" />
>>>>>>> refs/remotes/origin/main
