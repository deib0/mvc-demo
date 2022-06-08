import "./app3.css";
import $ from "jquery"
let $square = $('.square')
$square.on('click', () => {
    $square.toggleClass('move')

})