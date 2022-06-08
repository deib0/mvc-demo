import "./app1.css";
import $ from "jquery"
let $add = $('.add')
let $subtract = $('.subtract')
let $multiply = $('.multiply')
let $divide = $('.divide')
let $result = $('.result')
$add.on('click', () => {
    let n = parseInt($result.text())
    n++
    $result.text(n)
})
$subtract.on('click', () => {
    let n = parseInt($result.text())
    n--
    $result.text(n)
})
$multiply.on('click', () => {
    let n = parseInt($result.text())
    n = n * 2
    $result.text(n)
})
$divide.on('click', () => {
    let n = parseInt($result.text())
    n = n / 2
    $result.text(n)
})