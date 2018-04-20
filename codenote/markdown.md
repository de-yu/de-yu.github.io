
Header 使用 <br/>
"====="  代表 H1 <br/>
"--------"  代表 H2 <br/>
一個 # 代表 H1 <br />
二個 # 代表 H2 <br />
以此類推

Header H1  use
===

Header H2  use
-----

# Header H1 use

######Header H6 use

    Header H1  use
    ===

    Header H2  use
    -----

    # Header H1 use

    ######Header H6 use "######"

區塊使用 <br/>
在每行加入 > <br/>
或在開頭加入 > <br/>

> 這裡有很多字
是文字區塊

> one line
>
> three line

    > 這裡有很多字
    是文字區塊

    > one line
    >
    > three line



無序清單

使用這三個符號中的一個 +  -   *


* first
* second
* third
<br/>

        * first
        * second
        * third

有序清單
寫的時候前面的編號可以不用按照1 2 3 4
系統輸出時會調整好

5. one
7. two
3. three

<br/>

    5. one
    7. two
    3. three

程式碼區塊
四個空格或一個 tab 
    
    import java.util.*;
    public class uva
    {
       public static void main(String[] args)
        {
                System.out.println("uva");       
        }    
    }
  
<br/>

連結<br/>
可以使用\[文字](連結)的形式<br/>
或是 "[文字]"  <br/>
並在其他地方 "[文字]:連結" <br/>

[Google](https://www.google.com/webhp?ie=utf-8&oe=utf-8)

<br/>

[googlelink] this is a link.

[googlelink]:https://www.google.com/webhp?ie=utf-8&oe=utf-8

    [Google](https://www.google.com/webhp?ie=utf-8&oe=utf-8)

    <br/>

    [googlelink] this is a link.

    [googlelink]:https://www.google.com/webhp?ie=utf-8&oe=utf-8


分隔線<br/>
使用三個星號 減號 底線<br/>
 *  -  _<br/>

---

    --- 

字型<br/>
斜體用 一個 *  _ 把字刮起來<br/>
粗體用 二個 *  _ 把字刮起來<br/>

*strong*
_abc_

**Bold**
__abc__

    *strong*
    _abc_

    **Bold**
    __abc__

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$
\\(x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\\)
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default"></script>
