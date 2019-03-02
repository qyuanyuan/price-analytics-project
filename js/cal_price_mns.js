$(function () {
    $("._s2").select2();
   function final() {
       //取值
       var typeId =$("#typeId").val();
       var company =$("#company").val();
       var building =$("#building").val();
       var platform =$("#platform").val();
       var TTC =$("#TTC").val();
       var floor =$("#floor").val();
       var discount =$("#discount").val();
       var sum =$("#sum").val();
       if(floor != "" && discount != "" && floor > 0 && discount <= 0 && discount >= -100 && sum>0){
           //option 文字
           var company_key =$("#company").find("option:selected").text();
           var building_key =$("#building").find("option:selected").text();
           var platform_key =$("#platform").find("option:selected").text();
           var TTC_key =$("#TTC").find("option:selected").text();
           //基础价格填入table
           $("[data-res='typeId']").text(typeId);
           $("[data-res='company']").text(company_key);
           $("[data-res='building']").text(building_key);
           $("[data-res='platform']").text(platform_key);
           $("[data-res='TTC']").text(TTC_key);
           $("[data-res='floor']").text(floor);
           $("[data-res='discount']").text(discount);
           $("[data-res='sum']").text(sum);
           // PT13/20、PT13/18、PT13/16、PT10/18
           // var res = (64308.68377660379+parseInt(typeId)+parseInt(company)+parseInt(building)+parseInt(platform)+8742.320982767491*parseInt(floor)+parseInt(TTC)+661.7298335725593*parseInt(sum))*(100+parseInt(discount))/100;
           // PW10/18、PT13/20、PW10/10、PT13/18、PW13/10、PW13/16、PW13/18 该规格项目样本数大于20
           var res = (106857.90209846225+parseInt(typeId)+parseInt(company)+parseInt(building)+parseInt(platform)+7937.570870891344*parseInt(floor)+parseInt(TTC)+57.23279641572451*parseInt(sum))*(100+parseInt(discount))/100;
           comp_a(res);
           function comp_a(res) {
               var _a,_b,_c,_d,_e,_f,_g,_h,_i,_j;
               if($("#标的类型").slider("value")==0){_a=0.85}else if($("#标的类型").slider("value")==1) {_a=1};
               if($("#项目定位").slider("value")==0){_b=0.88}else if($("#项目定位").slider("value")==1) {_b=1}else if($("#项目定位").slider("value")==2) {_b=1.12};
               if($("#代理商级别").slider("value")==0){_c=0.96}else if($("#代理商级别").slider("value")==1) {_c=1}else if($("#代理商级别").slider("value")==2) {_c=1.04};
               if($("#商务条款优劣").slider("value")==0){_d=0.96}else if($("#商务条款优劣").slider("value")==1) {_d=1}else if($("#商务条款优劣").slider("value")==2) {_d=1.04};
               if($("#是否有主推功能").slider("value")==0){_e=0.96}else if($("#是否有主推功能").slider("value")==1) {_e=0.99}else if($("#是否有主推功能").slider("value")==2) {_e=1.02}else if($("#是否有主推功能").slider("value")==3) {_e=1.05}else if($("#是否有主推功能").slider("value")==4) {_e=1.08};
               if($("#当地品牌认可度").slider("value")==0){_f=0.98}else if($("#当地品牌认可度").slider("value")==1) {_f=1}else if($("#当地品牌认可度").slider("value")==2) {_f=1.02};
               if($("#与项目关键人关系").slider("value")==0){_g=0.98}else if($("#与项目关键人关系").slider("value")==1) {_g=1}else if($("#与项目关键人关系").slider("value")==2) {_g=1.02};
               if($("#项目进度").slider("value")==0){_h=0.92}else if($("#项目进度").slider("value")==1) {_h=1}else if($("#项目进度").slider("value")==2) {_h=1.08};
               if($("#转签率").slider("value")==0){_i=0.95}else if($("#转签率").slider("value")==1) {_i=1}else if($("#转签率").slider("value")==2) {_i=1.05};
               if($("#KONE竞争力").slider("value")==0){_j=0.96}else if($("#KONE竞争力").slider("value")==1) {_j=1}else if($("#KONE竞争力").slider("value")==2) {_j=1.04};

               var _a_CN,_b_CN,_c_CN,_d_CN,_e_CN,_f_CN,_g_CN,_h_CN,_i_CN,_j_CN;
               if($("#标的类型").slider("value")==0){_a_CN="公标"}else if($("#标的类型").slider("value")==1) {_a_CN="议标"};
               if($("#项目定位").slider("value")==0){_b_CN="低端"}else if($("#项目定位").slider("value")==1) {_b_CN="中端"}else if($("#项目定位").slider("value")==2) {_b_CN="高端"};
               if($("#代理商级别").slider("value")==0){_c_CN="承诺"}else if($("#代理商级别").slider("value")==1) {_c_CN="经常性"}else if($("#代理商级别").slider("value")==2) {_c_CN="偶尔"};
               if($("#商务条款优劣").slider("value")==0){_d_CN="好"}else if($("#商务条款优劣").slider("value")==1) {_d_CN="标准"}else if($("#商务条款优劣").slider("value")==2) {_d_CN="高"};
               if($("#是否有主推功能").slider("value")==0){_e_CN="无"}else if($("#是否有主推功能").slider("value")==1) {_e_CN="1个"}else if($("#是否有主推功能").slider("value")==2) {_e_CN="2个"}else if($("#是否有主推功能").slider("value")==3) {_e_CN="3个"}else if($("#是否有主推功能").slider("value")==4) {_e_CN=">3个"};
               if($("#当地品牌认可度").slider("value")==0){_f_CN="支持其它"}else if($("#当地品牌认可度").slider("value")==1) {_f_CN="了解"}else if($("#当地品牌认可度").slider("value")==2) {_f_CN="认可"};
               if($("#与项目关键人关系").slider("value")==0){_g_CN="非关键人"}else if($("#与项目关键人关系").slider("value")==1) {_g_CN="一般"}else if($("#与项目关键人关系").slider("value")==2) {_g_CN="好"};
               if($("#项目进度").slider("value")==0){_h_CN="当年发运"}else if($("#项目进度").slider("value")==1) {_h_CN="次年发运"}else if($("#项目进度").slider("value")==2) {_h_CN="2年后"};
               if($("#转签率").slider("value")==0){_i_CN="高"}else if($("#转签率").slider("value")==1) {_i_CN="中"}else if($("#转签率").slider("value")==2) {_i_CN="低"};
               if($("#KONE竞争力").slider("value")==0){_j_CN="劣势"}else if($("#KONE竞争力").slider("value")==1) {_j_CN="一般"}else if($("#KONE竞争力").slider("value")==2) {_j_CN="优势"};

               $("[data-res='_a']").text(_a_CN);
               $("[data-res='_b']").text(_b_CN);
               $("[data-res='_c']").text(_c_CN);
               $("[data-res='_d']").text(_d_CN);
               $("[data-res='_e']").text(_e_CN);
               $("[data-res='_f']").text(_f_CN);
               $("[data-res='_g']").text(_g_CN);
               $("[data-res='_h']").text(_h_CN);
               $("[data-res='_i']").text(_i_CN);
               $("[data-res='_j']").text(_j_CN);
               var res_final = _a * _b * _c * _d * _e * _f * _g * _h * _i * _j * res ;
               console.log("res="+res);
               $("[data-res='res']").text(Math.round(res_final));
           }
       }
   }
    $(".valuable").change(function () {
        final()
    });
    //项目特性
    $( ".slider" ).slider({
        change: function( event, ui ) {
            final()
        }
    });
    $("#floor,#discount,#sum").keyup(function () {
        final()
    })
});

//
// 106857.90209846225,偏量
//
// 33447.62950499263,温州
// 13753.94212737162,宁波
// 17881.0343189963,南昌
// 33769.38529603056,金华
// 2354.797319903628,嘉兴
// 5656.113531179332,杭州
//
// 19292.68023651632,商场
// 14886.3316293236,私人别墅
// 7118.884826299589,综合楼
// 30420.863987533197,酒店
// 19312.11640215019,住宅楼
// 30649.085113200963,学校和娱乐设施
// 15197.337190904225,办公楼
// 1.0,医院
// 1.0,保障性住房
// 1.0,公共交通
// -30012.39728745927,工厂工业
//
// 1.0,餐梯或杂货梯
// -32228.042904569735,Zmini
// 1.0,Transys
// 1.0,TM110s
// 129041.64693551914,Smono
// 1.0,Smini
// 1.0,Other-TM115
// 1.0,Other-TM110
// 1.0,Other
// 15757.595847491244,Nmono
// 15224.138974148993,Nmini R
// 54359.61037999974,Nmini
// 1.0,Mono Home Lift
// 1.0,Mini
// -36563.197184912366,Emono
// -38727.849949209165,Emini
//
// 25482.11609163055,PW10/18
// 8597.852720535891,PT13/20
// 8063.789450134487,PW10/10
// -9971.996220163996,PT13/18
// 14897.26927071026,PW13/10
// 24235.79071478757,PW13/16
// 35559.080070833974,PW13/18
//
//
//
// 44393.17225144053,SEC
// 62465.72984702833,TTC
//
//
// 57.23279641572451,台量
// 7937.570870891344,层站