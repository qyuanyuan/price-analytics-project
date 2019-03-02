/**
 * Created by chenweixuan on 2019/1/10.
 */
$(function () {
    // 滑块
    // var hanzi = ;
    $("#标的类型").slider({
        min: 0,
        max: ["公标", "议标"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["公标", "议标"]
    });
    $("#项目定位").slider({
        min: 0,
        max: ["低端", "中端","高端"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["低端", "中端","高端"]
    });
    $("#代理商级别").slider({
        min: 0,
        max: ["承诺", "经常性","偶尔"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["承诺", "经常性","偶尔"]
    });
    $("#商务条款优劣").slider({
        min: 0,
        max: ["好", "标准","差"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["好", "标准","差"]
    });
    $("#是否有主推功能").slider({
        min: 0,
        max: ["无", "1个","2个","3个",">3个"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["无", "1个","2个","3个",">3个"]
    });
    $("#当地品牌认可度").slider({
        min: 0,
        max: ["支持其它", "了解","认可"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["支持其它", "了解","认可"]
    });
    $("#与项目关键人关系").slider({
        min: 0,
        max: ["非关键人", "一般","好"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["非关键人", "一般","好"]
    });
    $("#项目进度").slider({
        min: 0,
        max: ["当年发运", "次年发运","2年后"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["当年发运", "次年发运","2年后"]
    });
    $("#转签率").slider({
        min: 0,
        max: ["高", "中","低"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["高", "中","低"]
    });
    $("#KONE竞争力").slider({
        min: 0,
        max: ["劣势", "一般","优势"].length-1,
        value:1
    }).slider("pips", {
        rest: "label",
        labels: ["劣势", "一般","优势"]
    });
})











