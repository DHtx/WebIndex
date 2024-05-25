// 实现模糊查询
// 实现模糊查询
// 实现模糊查询
// 实现模糊查询
// 实现模糊查询


//querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
// 注意： querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
//如：
// 获取文档中 class="example" 的第一个元素:
// document.querySelector(".example");
//
// 获取文档中 class="example" 的第一个 <p> 元素:
// document.querySelector("p.example");
// 以下实例演示了多个选择器的使用方法。
//
// 假定你选择了两个选择器: <h2> 和 <h3> 元素。
//
// 以下代码将为文档的第一个 <h2> 元素添加背景颜色：
//
// <h2>A h2 element</h2>
// <h3>A h3 element</h3>
//
// document.querySelector("h2, h3").style.backgroundColor = "red";
// 但是，如果文档中 <h3> 元素位于 <h2> 元素之前，<h3> 元素将会被设置指定的背景颜色。
//
// <h3>A h3 element</h3>
// <h2>A h2 element</h2>
//
// document.querySelector("h2, h3").style.backgroundColor = "red";


//获取输入框   把css中的.keyword 的内容放在keyword中 即输入的内容放在keyworld中
let keyword= document.querySelector('.keyword');


//获取搜索的下拉列表  .search-helper是搜索框样式的css，放在searchHelper中
let searchHelper=document.querySelector('.search-helper')


//定义一个数组,粗暴出搜索的内容
let searchArr=['小米手机','华为手机','小米电视','小米平板','苹果12','苹果14','苹果手表'];


//给输入框绑定内容改变事件

//oninput 事件在用户输入时触发。
// 该事件在 <input> 或 <textarea> 元素的值发生改变时触发。


keyword.oninput=function()
{
    //初始化。search-helper中的内容
    searchHelper.innerHTML=''
    for(let i=0;i<searchArr.length;i++)
    {
        //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        // 如果没有找到匹配的字符串则返回 -1。
        // 注意： indexOf() 方法区分大小写。
        if(searchArr[i].indexOf(keyword.value)!=-1)
        {

            //.innerHTML是html中放入内容   //innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML。
            searchHelper.innerHTML+='<p>'+searchArr[i]+'</p>';


            //如：document.getElementById("myDIV").style.display = "none";
            // block	元素被渲染为块级元素。
            //inline	元素呈现为行内元素。默认。
            //none	元素不会显示。
            searchHelper.style.display='block';

        }
    }
}

//失焦
keyword.onblur=function ()
{
    //将html的内容隐藏
    searchHelper.style.display='none'
}

//
//
//
//


//实现轮播图切换
//实现轮播图切换
//实现轮播图切换
//实现轮播图切换
//实现轮播图切换


let img=document.querySelector('.img');
let prev=document.querySelector('.prev');
let next=document.querySelector('.next');
let slide=document.querySelector(".banner-slide-slide")
let lis=document.querySelectorAll(".banner-btn li")


//创建图片的数组，保存图片命，count为数组的序号如：imgArr[0]、imgArr[1]
let imgArr=['qingting.jpg','xiongmao.jpg','xueren.jpg','tingzi.jpg','xingxing.jpg','dangao.jpg','shizi.jpg','denglong.jpg']
let count=0;


//定义函数，用来切换图片的路径
function cutImg()
{
    //img.src:给img标签中的src赋值
    //两个字符串相加，得到<img>标签中的src的值
    //起到更换图片的作用
    img.src='./images/'+imgArr[count];


    for(let i=0;i<lis.length;i++)
    {
        lis[i].className="";
    }

    lis[count].className="active";

}


//自动切换图片

// js 定时器有以下两个方法：
// setInterval() ：按照指定的周期（以毫秒计）来调用函数或计算表达式。方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
// setTimeout() ：在指定的毫秒数后调用函数或计算表达式。

// setInterval(code,millisec,lang)
// code	必需。要调用的函数或要执行的代码串。
// millisec	必须。周期性执行或调用 code 之间的时间间隔，以毫秒计。
// lang	可选。 JScript | VBScript | JavaScript
//如：var int=self.setInterval("clock()",1000);
let timer=setInterval(
    function ()
    {
        count++;
        if(count>imgArr.length-1)
        {
            count=0
        }
        cutImg();
    },3000);


//点击下一张
// onclick 事件会在元素被点击时发生。

next.onclick=function ()
    {
        count++;


        //数组从零开始算，到.length-1
        if(count>imgArr.length-1)
        {
            count=0
        }
        cutImg();
    }


//点击上一张
prev.onclick=function ()
    {
        count--;
        if(count<0)
        {
            count=imgArr.length-1;
        }
        cutImg();
    }


//鼠标划入后取消自动切换图片
slide.onmouseover=function ()
{
    clearInterval(timer)
}


//鼠标划出后，继续自动切换图片
slide.onmouseout=function ()
{
    timer=setInterval(
        function ()
        {
            count++;
            if(count>imgArr.length-1)
            {
                count=0
            }
            cutImg();
        },3000);
}


//给li绑定点击事件:点击后也会换图
for(let i=0;i<lis.length;i++)
{
    lis[i].onclick=()=>
    {
        count=i;
        cutImg();
    }
}


//轮播图切换结束
//轮播图切换结束
//轮播图切换结束
//轮播图切换结束
//轮播图切换结束
//轮播图切换结束

//实现楼层的定位切换
let header=document.querySelector(".header")
let  banner=document.querySelector(".banner")
let elevator=document.querySelector(".elevator")



//实现楼层的滚动后变色效果

//获取所有的<div>
let  items=document.querySelectorAll('.content h6');
let  elevatorA=document.querySelectorAll('.elevator p');


//调试时使用
// console.log(items)
// console.log(elevatorA)

//数组中放四个数,高度
let elevatorArr=[];

let base=header.offsetHeight+banner.offsetHeight;
let a=header.offsetHeight+banner.offsetHeight;


function clearColor()
{
    for (let i=0;i<elevatorA.length;i++)
    {
        elevatorA[i].style.color="";
    }
}



for(let i=0;i<items.length;i++)
{
    base= base+items[i].offsetHeight;
    console.log(base);
    elevatorArr.push(base);
}


let search=document.querySelector(".search")
let searchM=document.querySelector(".search-m")
let form=document.querySelector(".form")
let searchLogo=document.querySelector(".search_logo")



document.onscroll=function ()
{
    //获取滚动条垂直滚动了多少
    let top=document.documentElement.scrollTop||document.body.scrollTop;

    //获取header的高度
    let headerHeight=header.offsetHeight;  //包括height、padding、border
    //获取到banner的高度
    let bannerHeight=banner.offsetHeight;



    //当滚动条到一定位置时，将楼层的定位换成固定定位
    if(top>=headerHeight + bannerHeight)
    {
        elevator.className="elevator elevator-fix";
        search.className='search search-fix';
        searchM.style.height="50px"
        form.style.top="8px"
        searchLogo.style.display="block"
    }
    else
    {
        elevator.className='elevator';
        search.className='search';
        searchM.style.height="60px";
        form.style.top="25px"
        searchLogo.style.display="none"
    }


    if(top<a)
    {
        clearColor();
    }else if(top>=a&&top<elevatorArr[0])
    {
        clearColor();
        elevatorA[0].style.color="red";
    }else if(top>=elevatorArr[0] && top<elevatorArr[1])
    {
        clearColor();
        elevatorA[1].style.color="red";
    }else if(top>=elevatorArr[1] && top<elevatorArr[2])
    {
        clearColor();
        elevatorA[2].style.color="red";
    }else if(top>=elevatorArr[2]-800)
    {
        clearColor();
        elevatorA[3].style.color="red";
    }

}




//向右平缓滑动

let ul=document.querySelector('.area ul');
let  area=document.querySelector('.area');

ul.innerHTML+=ul.innerHTML
let left=parseInt(getComputedStyle(ul).left);
function move()
{
    left-=10;
    if(left<=-607)
    {
        left=0;
    }

    ul.style.left=left+'px';

}
let timerr=setInterval(move,50);

