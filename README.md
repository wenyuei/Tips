# Tips
该项目是旅游网站
今天的目标:
1.写完头部
项目的背景:
	旅游新职业——自助游线路设计。('穷游')
	所谓“穷游”，是指用很省钱的方式旅游。“穷游”一族的旅游方式不同于以往报名参加旅行社团队或是购买自由行线路，他们积极地在网上搜索打折票或者廉价航空公司机票，住便宜的酒店，家庭旅馆甚至帐篷，在饮食和游玩上，也要求既省钱又和当地人贴切。
现在的人们过惯了城市的快节奏生活，想寻找另外一种生活方式，从而选择了穷游。
而且在旅游中能汲取更多的姿势，了解到更多的风土人情，开阔自己的视野；或者仅仅是想和朋友聚在一起出去玩几天，又或者是想追求自己心中的一些东西。
一、不同的世界，带给你快乐和幸福。
二、开阔眼界，增长知识和见闻。
三、缓解压力，使精神得到放松。
项目中的问题:
1.gulp：提交完成后，一直出现Error（跟种错误）？
解决方案：
	一：先查看报错原因，进新修删改查等
	二：如果看到红色字体，cnpm install 请求不成功时，最好在把之前的node_modules重新下载（个人因为这件事情，删了n次幂了~~）
	三：还有如果gulpfile.js里的文件东西写错了，也会报错传不上去。（一定要认真在认真，步骤简单，就是操作复杂）
2.当li里的元素超过ul的宽度，怎么吧？
解决方案：
	给li的width添加一个属性（width: -webkit-fill-available;）类似兼容的属性

