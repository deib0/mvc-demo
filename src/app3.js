import "./app3.css";
import $ from "jquery"
let $square = $('.square')
$square.on('click', () => {
    $square.toggleClass('move')// 会自动检测类名，如果有就加，没有就去掉
})