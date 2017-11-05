# Tips
该项目是旅游网站

今天的目标:<br>
1.写完头部<br>
项目的背景:<br>
	旅游新职业——自助游线路设计。('穷游')<br>
	所谓“穷游”，是指用很省钱的方式旅游。“穷游”一族的旅游方式不同于以往报名参加旅行社团队或是购买自由行线路，他们积极地在网上搜索打折票或者廉价航空公司机票，住便宜的酒店，家庭旅馆甚至帐篷，在饮食和游玩上，也要求既省钱又和当地人贴切。<br>
	现在的人们过惯了城市的快节奏生活，想寻找另外一种生活方式，从而选择了穷游。
而且在旅游中能汲取更多的姿势，了解到更多的风土人情，开阔自己的视野；或者仅仅是想和朋友聚在一起出去玩几天，又或者是想追求自己心中的一些东西。<br>
一、不同的世界，带给你快乐和幸福。<br>
二、开阔眼界，增长知识和见闻。<br>
三、缓解压力，使精神得到放松<br>。
项目中的问题:<br>
1.gulp：提交完成后，一直出现Error（跟种错误）？<br>
解决方案：<br>
	一：先查看报错原因，进新修删改查等<br>
	二：如果看到红色字体，cnpm install 请求不成功时，最好在把之前的node_modules重新下载（个人因为这件事情，删了n次幂了~~）<br>
	三：还有如果gulpfile.js里的文件东西写错了，也会报错传不上去。（一定要认真在认真，步骤简单，就是操作复杂）
2.当li里的元素超过ul的宽度，怎么吧？<br>
解决方案：<br>
	给li的width添加一个属性（width: <br>-webkit-fill-available;）类似兼容的属性<br>

3.当css不同步时,应该咋办?<br>
解决方案:<br>
	打开css文件.看是否样式写错,少加括号等一系列细节问题.
4.想用gulp打开第二个文件,可是一直打开默认路径,怎么办?
解决方案:<br>
	默认地址localhost:3000，默认打开index.html，如果没有，需要手动加上你要打开的页面，如localhost:3000/test.html。<br>