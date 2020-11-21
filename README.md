# Gansu-University-Painted-Pottery-Network

中文名:  <a href="javascript:void(0)">甘肃大学生彩陶网</a>

>  `ICO在线制作推荐:` https://tool.lu/favicon/
>
> ​	使用方法:  
>
> 		+ 上传图片,剪裁
> 		+ 点击下载,跳转后右击另存为(`*.ico`文件)
>
>  

###  2020年-11月-18日:

> 
>
> 完成 Header-logo Nav
>
> 背景颜色改动
>
> 图片改动
>
> 文本信息改动
>
> 

![完成 Header-logo Nav](https://img-blog.csdnimg.cn/20201119015723538.gif#pic_center)



###  2020年-11月-19日；

> ```
> 应用: Animation
> 
> 布局: Flex
> 
> ```

```css
图片相对垂直居中:
    position: absolute;
    left: 50%;
    transform: translate(-50%);
```

+ 整体效果预览

  ![布局无坍塌](access/gif/2020-11-19.gif)



###  2020年11月-20日:

+ 修复搜索框显示问题

  ![最终使用](https://gitee.com/wang_hong_bin/pic-go-photos/raw/master/searchBtn.png)

+ 修复`card`背景颜色显示

  + 采用`float`布局

  + 添加`css3 animation`

  + 使用linear-gradient

    + ` linear-gradient()`推荐:

      
    >
    >
    > https: //webgradients.com/
    >
    >
    >
    >https: //gradient.shapefactory.co/
    >
    >
    
    
    
    
    
    + 原图:
    
      ![背景色未修复前](https://gitee.com/wang_hong_bin/pic-go-photos/raw/master/fixCard.png)
    
    + 修复后(维护中······)

+ 准备轮播图实现

  + 存在一条 `bug`

    + `bug`描述:  在判断了最后一张图片的情况下,`next`事件依然显示一张空白背景(已解决稍微有点缺陷,在提升后修复)

+ 添加新布局

  + 考虑瀑布流(放弃选择)
  + 添加`footer`页脚,已完成 !

+ 暂时完成首页布局



> 
>
> 疑问: `float 中`未使用 清除浮动，什么时候使用清除浮动(····)
>
> 



###  2020年11月21日:

+ 添加第一个子页

  + 子页新布局考虑

  + 整体颜色更改

  + 动画内容更改

  + 添加 `JS`事件

  + 添加时间倒计时布局(考虑中····)

  + `H5`新标签的使用

    ```html
    <figure>  </figure>
    
    	figure:
    
    <figcaption> </figcaption>
    
    	figcaption:
    ```

+ `css3 :hover`理解与掌握使用

  + `css2`选择器

    ```html
    element1 + element2 选择器匹配出现在 element 后面的临近的 element2
    ```

  + `css3`选择器

    ```html
    element1 ~ element2 选择器匹配出现在 element1 后面的 element2
    ```

+ `box-shadow`理解使用

  ```scss
  box-shadow: offset-x offset-y blur spread color position;
  ```

+ 翘边阴影的使用

  ```scss
  transform: skew(角度); // skew() 扭曲
  ```

+ `linear-gradient()`

  ```scss
  background: linear-gradient();
  ```

+ 添加新属性`filter`的使用

  ```scss
  filter: sepia(.2) brightness(1) contrast(1.3);
  
  sepia: 将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设	
  		置，值默认是0。
  
  brightness: 给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超
  
  			过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。
  
  contrast: 调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。
  ```

+ 首页局部锚链接添加

  ```HTML
  <!-- 
      彩陶文化: Painted pottery culture
      
  	ID简称: ppc
  -->
  ```

  + 学术展览(`id: A-e`)
  + 彩陶文化(`id: ppc`)

+ 添加返回顶部与返回首页功能

  

###  2020年11月22日:

+ 添加第二个子页



> 
>
> https://lovobin.github.io/Gansu-University-Painted-Pottery-Network/   （布局展示）
>
> 