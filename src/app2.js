import "./app2.css";
import $ from "jquery"
let $switch = $('.switch')
let $content = $('.content')
$switch.on('click', 'li', (e) => {
    let $li = $(e.currentTarget)
    let index = $li.index()//  被点击的元素是第几个儿子
    $li.addClass('selected').siblings().removeClass('selected')//  被点击元素的兄弟去类名
    $content.children()
        .eq(index).removeClass('none')//  eq(）得到顺序
        .siblings().addClass('none')
})
$switch.children().eq(0).trigger('click')//  默认触发第一个
