# Question: How to import HtmlElement

# Import JQUERY - refer to https://ithelp.ithome.com.tw/articles/10190065
index.html
````html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
````
````
declare let $: any;    
````

# put javascript lib on local
https://stackoverflow.com/questions/44740687/my-local-javascript-file-is-not-loaded-in-angular-2

* include  
* import   # 使用 import的js需要以此種方式被html引用 <script type="module" src="./index.js"></script>
** https://openhome.cc/Gossip/ECMAScript/ScriptModule.html
* require  # need require.js

Angular import jquery in components ... refer to https://ithelp.ithome.com.tw/articles/10190065
declare let $: any;
--
imported as a global library
<script src="./index.js"></script>

imported as a module  ==> 會關乎到 index.js能不能用 import 語法
<script type="module" src="./index.js"></script>

# imported as a golbal library ... index.html需要引入 <script src="./assets/tool.js"></script>
declare let $: any;
declare let tool1: any;    
* 也可以自定義路徑, 不一定要放在 ./src/asset/  ... 打開 angular.json, 看裡面的 "scripts", 有兩段, 在裡面寫上實際定義的路徑即可,
ex:
"scripts": ["./lib/tool.js"]  # 這時候index.html就不需要引入了

# imported as a module ... index.html不需要引入
import * as tool from '../assets/tool_module.js';
