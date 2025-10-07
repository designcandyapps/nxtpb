$(function(){
b={
  blk:"0,0,0",
  dgy:"86,87,88",
  lgy:"231,232,234",
  lpk:"252,220,255",
  dpk:"204,5,124",
  drd:"235,0,50",
  dor:"253,79,0",
  lyl:"250,255,189",
  dyl:"255,249,39",
  yel:"255,230,0",
  lgr:"138,255,223", //--160,235,190; 143,233,164
  dgr:"29,229,181", //#1de2b5 //51,255,204
  grn:"153,204,0", //#aefce2
  bpg:"0,153,0", //#009900
  bpl:"153,204,0", //#99cc00
  bpy:"255,230,0", //#ffe600
  tur:"0,246,255", //#00f6ff
  aqu:"188,243,255",
  lqu:"240,250,247", //.9
  ble:"0,84,255", //#0054ff
  bll:"0,0,51",
  blu:"4,118,252",
  dbb:"0,0,255",
  ddb:"27,27,36",
  lpr:"202,134,255",
  dpr:"170,65,230"
}
  var u=new URLSearchParams(location.search).get("u"); u=!u||u=="null"?$("#ui").val():"https://www."+u; var s=new URLSearchParams(location.search).get("s"); var t=new URLSearchParams(location.search).get("t"); var c=new URLSearchParams(location.search).get("c"); var d=new URLSearchParams(location.search).get("d"); var e=new URLSearchParams(location.search).get("e"); var f; if(new URLSearchParams(location.search).get("f")==null){f=1}else{f=.35} c=!c||c==null?"":c; var r="rgba("+b[c]+",1)"; d=!d||d==null?c:d; var k="rgba("+b[d]+","+f+")"; e=!e||e==null?c:e; var m="rgba("+b[e]+",1)";

var ygrab=function(h,callback){var j=[]; if(Object.prototype.toString.call(h)==='[object Array]'){$.each(h,function(i,a){GS(a.url,function(e){if(a.loop){$.each($(e).find(a.selector),function(){var c=$(this); var d={}; $.each(a.result,function(x,v){var a=c.find(v.find); var b=''; if(v.grab.by=='text'){b=a.text()}else if(v.grab.by=='html'){b=a.html()}else if (v.grab.by=='attr'){b=a.attr(v.grab.value)}else if(v.grab.by=='data'){b=a.data(v.grab.value)} d[v.name]=b}); j.push(d)})}else{var f=$(e).find(a.selector+':eq(0)'); var g={}; $.each(a.result,function(x,v){var a=f.find(v.find); var b=''; if(v.grab.by=='text'){b=a.text()}else if(v.grab.by=='html'){b=a.html()}else if(v.grab.by=='attr'){b=a.attr(v.grab.value)}else if(v.grab.by=='data'){b=a.data(v.grab.value)} g[v.name]=b}); j.push(g)} callback(j)})})}else{var a=h; GS(a.url,function(k){if(a.loop){$.each($(k).find(a.selector),function(){var c=$(this); var d={}; $.each(a.result,function(x,v){var a=c.find(v.find); var b=''; if(v.grab.by=='text'){b=a.text()}else if(v.grab.by=='html'){b=a.html()}else if(v.grab.by=='attr'){b=a.attr(v.grab.value)}else if(v.grab.by=='data'){b=a.data(v.grab.value)} d[v.name]=b}); j.push(d)})}else{var l=$(k).find(a.selector+':eq(0)'); var m={}; $.each(a.result,function(x,v){var a=l.find(v.find); var b=''; if(v.grab.by=='text'){b=a.text()}else if(v.grab.by=='html'){b=a.html()}else if(v.grab.by=='attr'){b=a.attr(v.grab.value)}else if(v.grab.by=='data'){b=a.data(v.grab.value)} m[v.name]=b}); j.push(m)} callback(j)})}
function GS(b,html){$.getJSON("https://script.google.com/macros/s/AKfycbyMgb620k8sJr3FrESNboqRaVeMTVR-ZikslQeg2xLUoRnOeLAL/exec?url="+b+"&callback=?",
  function(json){
    $("header,.header *").wrap('<div></div>').wrap('<div id="hd"></div>').removeClass("bg-background/75").removeClass("backdrop-blur").css({"background":"none",border:0});
    $("body>*>*>*>*>*").last().wrap('<div id="ft"></div>');
    var rd=$(json.data); var cc=$("body>*>*>*>*>*");
    cc.css({position:"relative"});
    var zcc="body>*>*>*>*>*"; var hd=cc.eq(0);
    var mn=cc.eq(1); var m2=cc.eq(2);
    var m3=cc.eq(3); var m4=cc.eq(4);
    var m5=cc.eq(5); var ft=$("body>*>*>*>*>*").last();
    var de=$("section>div",rd).next("div");
    var ed=$("body>*>*>*>div>div>div>div>div>div");
    var ef=$("section>div",rd).parent().parent().parent().parent().next("div").children("*");
    var fg=$("section>div",rd).parent().parent().parent().parent().next("div").next("div").children("*");
    var gh=$("section>div",rd).parent().parent().parent().parent().next("div").next("div").next("div").children("*");
    var hi=$("section>div",rd).parent().parent().parent().parent().next("div").next("div").next("div").next("div");

    var h1=$("h1:eq(0)").attr("id","h"); var h2=$("h2:eq(0)"); var pc=$("h1:eq(0)",rd); var pp=pc.next("*"); var ht=$("h2:eq(0)",rd);
    var cp=pc.html().replace("<strong>","").replace("</strong>","").replace("<br>"," ").replace("<br>"," ").replace("<br>"," ").replace("<br>"," ").replace("&amp;","&");
    var hp=ht.parent().next("div"); h1.text(cp); h1.next("div").attr("id","t"); h2.text(ht.text()); h2.next("div").addClass("hn").text(hp.html());
    h2.after(hp.html()); for(i=0;i<de.length;i++){ed.eq(i).html(de.eq(i).html())} m3.html(ef.html()); m4.html(fg.html()); m5.html(gh.html());
    //$("#prompt").val(cp); //alert($("#prompt").val());
    $("#prompt").val("Zzz"); alert("pr: "+document.querySelector("prompt").value);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// IMG ////////////////////////////////////////////////////////////////////////
    setTimeout(function(){
    var i1=$("header>img:eq(0)"); i1.wrap('<div id="i1"></div>'); $("#i1,#i1 *").css({height:60});
    var i2=$("*:eq(0) img:eq(0)",rd);
    var i2s=i2.attr("src"); if(i2s&&i2s!="null"){var i2z=i2s.slice(0,4); var i21=i2s.slice(0,1); var i22=i2s.slice(0,2); //alert(i2s); alert(i2z); alert(i22);
    }
    ///// ALERT 4 ////////////////////////////////////////////////////////////
    if(i2z=="data"||i2z=="http"||i22=="//"){//alert(4);
      $("#ee").attr("src",i2s);
      //alert($("#ee").attr("src"));
    }
    ///// ALERT 3 ////////////////////////////////////////////////////////////
    if(i21=="/"&&i22!="//"){//alert(3);
      $("#ee").attr("src",u+"/"+i2s);
      //alert($("#ee").attr("src"));
    }
    ///// ALERT 2 ////////////////////////////////////////////////////////////
    if(!i2s||i2s=="null"&&$("* svg:eq(0)",rd)){//alert(2);
      i2=$("* svg:eq(0)",rd);
      i2.parent().children("div").remove();
      //alert(i2.parent().html());
      $("#i1").html(i2.parent().html());
      //alert($("#i1").html());
      function sb64(sv){const es=btoa(unescape(encodeURIComponent(sv))); return `data:image/svg+xml;base64,${es}`}
      const bs=sb64(i2.parent().html()); //alert(bs);
      $("#ee").attr("src",bs).width(140);
      //$("#i1").html('<img id="ee" src="'+bs+'">'); alert($("#i1").html());
      var b2z=bs.slice(0,4);
      //alert($("#ee").attr("src"));
    }
    ///// ALERT 1 ////////////////////////////////////////////////////////////
    if(b2z!="data"&&i2z!="data"&&i2z!="http"&&i21!="/"&&i22!="//"){//alert(1);
      $("#ee").attr("src",u+"/"+i2s).removeAttr("width");
      //alert($("#ee").attr("src"));
    }
    $("#i1").css({margin:"0 auto","min-width":160,"vertical-align":"middle"});
    $("#i1 img,#ee").css({"margin":"17px 0","max-width":155,"max-height":45}); $("#i2").remove();
    },1300);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// BG //////////////////////////////////////////////////////////////////////////
    setTimeout(function(){
    /***BG***/
    var r0=$("#dv7").css("background-color");
    r0=r0&&r0=="rgb(0, 0, 0)"?"#0c152d":r0;
    var r1="rgba("+r0.replace("rgb(","").replace(")","")+",.1)"; //cc1c84 //f6d6e5
    var r1a="rgba(255,255,255,1)"; var r1r="red";
    var r2=$("#dv8").css("background-color");
    var r3=$("#dv10").css("background-color");
    r3="rgba("+r2.replace("rgb(","").replace(")","")+",.75)";
    var r4="rgba("+r2.replace("rgb(","").replace(")","")+",.85)";
    var r5="rgba("+r3.replace("rgb(","").replace(")","")+",.9)";

    var z0="#0c152d"; //"rgba(17,17,17,1)"; //BLK
    //var z1="rgba(50,50,50,1)"; //DKGRAY
    var z1="rgba(247,248,250,1)"; //WHT-GRY
    var z2="rgba(203,213,225,1)"; //xLTGRAY
    var x1="rgba(15,23,42,1)"; //xDKGRAY
    var x2="rgba(71,85,105,1)"; //xLTGRAY2
    var y0="rgba(245,243,238,1)"; //TAN

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// CSS ////////////////////////////////////////////////////////////////////////
    $("*").css({outline:0,"border":0,"font-style":"normal","font-weight":"normal",color:x2})
    .removeClass("relative").removeClass("items-center"); $(".-mb-px").css({margin:0});
    $("header>div:eq(0)").addClass("items-center"); $("header kbd").parent().addClass("items-center");
    $("body").css({"overflow-x":"hidden",background: r0,"font-family":t}); $("p").css({"margin-bottom":35});
    $("p,h1,h2").css({"font-family":s});
    $("h1,h2").css({"line-height":1.2,color:x1});
    $("h1").css({
      "margin":"0 0 25px 0",
      "font-size":"290%",
      "letter-spacing":"-.2rem"
    });
    $("h2").css({"margin-bottom":15,"font-size":"200%","letter-spacing":"-.055rem","text-align":"left"}); hd.css({"padding-left":24,"padding-right":24});
    $("p>a").css({"text-decoration":"underline",color:"inherit"}); //r3
    $("header a").css({padding:0,border:0});
    $(".lp-button a").css({
      padding:"11px 25px 15px 25px",
      "border-radius":32,
      border:"2px solid #bbb",
      "border-color":r4,
      color:r4
    });
    $(".g,#z,#pv,#prompt").css({position:"absolute","z-index":8,top:-999,left:-999,width:300});
    $(".zg").css({top:0,left:0});
    $("#zz,#zpv").css({top:40,left:0});
    $("#prompt,#pv").css({"z-index":9,"border":"2px solid gray","color":"#000"});

////////////////////////////////////////////////////////////////////////////////////
/// MN /////////////////////////////////////////////////////////////////////////
    $(zcc+":eq(1),"+zcc+":eq(2)").css({padding:"65px 14px"});
    mn.css({"padding":"345px 11px 65px 11px"});
    $(zcc+":eq(1) h1").css({"color":x1});
    //hd.parent().prepend('<div class="a"></div>');
    mn.attr("id","v").prepend('<div class="a"></div>');
    mn.prepend('<div class="a"></div>');
    //mn.prepend('<div class="a"></div>');
    //mn.prepend('<span id="a"><span class="lines"><span class="line"></span><span class="line"></span><span class="line"></span></span</span>');
    $(".a").css({position:"absolute",display:"block","z-index":-1,top:"-64px",left:0,width:"100%",height:"127%"});
    $(".a:eq(0)").css({
      "background-color":r1a, //-r2
      "filter":"brightness(150%) saturate(220%)",
      "opacity":.8 //-.2
    });
    $(".a:eq(1)").css({
      "z-index":-2,
      "filter":"brightness(150%) saturate(220%) contrast(180%) /*hue-rotate(90deg) invert(75%) grayscale(100%) blur(20px)*/",
      "-background":"no-repeat url("+$("#pho2").val()+")","background-size":"cover",
      "opacity":.4
    });
    $(".a:eq(2)").css({
      "z-index":-3,
      "filter":"brightness(150%) saturate(220%)",
      background:r3
    });

////////////////////////////////////////////////////////////////////////////////////
/// M2 //////////////////////////////////////////////////////////////////////////
    m2.css({background:r0});
    $(zcc+":eq(3),"+zcc+":eq(4),"+zcc+":eq(5)").css({"padding-left":31,"padding-right":31});
   m2.children("*").children("*").removeClass("items-center").removeClass("text-center");
    $(zcc+":eq(2) h2").css({"color":z1}); //inherit
    $(zcc+":eq(2) *").not("h2").css({color:r4});

////////////////////////////////////////////////////////////////////////////////////
/// M3 //////////////////////////////////////////////////////////////////////////
    //m3.css({background:r1}); //-r3
    $(zcc+":eq(3) h2").css({"color":z1});
    //$(zcc+":eq(3) *").not("h2").css({"color":r2});

    m3.prepend('<div class="b"></div>');
    $(".b").css({position:"absolute",display:"block","z-index":-1,top:0,left:0,width:"100%",height:"100%",
      "background-color":r1a,
      "opacity":.6
    });

////////////////////////////////////////////////////////////////////////////////////
/// M4 //////////////////////////////////////////////////////////////////////////
    $(zcc+":eq(4) *").not("h2").css({"color":r1a}); //x1
    $(zcc+":eq(4) h1").css({"font-size":"200%","letter-spacing":"-0.11rem",color:z1});
    $(zcc+":eq(4) h2").css({color:z1});

    m4.prepend('<div class="c"></div>');
    m4.prepend('<div class="c"></div>');
    m4.prepend('<div class="c"></div>');
    $(".c").css({position:"absolute",display:"block", "z-index":-1,top:0,left:0,width:"100%",height:"100%"});
    $(".c:eq(0)").css({
      "background-color":z0,
      "filter":"brightness(150%)",
      "background":"radial-gradient(75% 75% at 8% 50%,#f6d6e5 0,#0c152d 100%)",
      "opacity":.2
    });
    $(".c:eq(1)").css({
      "z-index":-2,
      "filter":"brightness(150%) saturate(120%) contrast(180%) /*hue-rotate(90deg) invert(75%)*/grayscale(100%) /*blur(20px)*/",
      "background":"no-repeat url("+$("#pho").val()+")","background-size":"cover",
      "opacity":.1
    });
    $(".c:eq(2)").css({"z-index":-3,background:z0});

////////////////////////////////////////////////////////////////////////////////////
/// M5 //////////////////////////////////////////////////////////////////////////
    m5.css({background:z1});

////////////////////////////////////////////////////////////////////////////////////
/// NS //////////////////////////////////////////////////////////////////////////
    var ns=m2.children("div").children("div:eq(1)");
    //$(".slick-slide>div>div>p").each(function(i){
    ns.children("div").each(function(i){
      //alert($(this).html());
      $(".slick-slide:eq("+i+")").html(ns.children("div:eq("+i+")").html());
      //alert($(this).html());
    }); $(".group").remove();
    $(".news-slider *").css({margin:0,color:z2});
    $(".slick-slide>div").css({
      "margin-right":10,
      "padding":"12px 15px 15px 8px",
      "-border":"2px solid red"
    });
    $(".slick-slide>div>*,.news-slider h2").css({"padding-bottom":15,"font-size":"130%"});
    $(".slick-slide>div>div *").css({
      "-border":"2px solid blue"
    });
    $(".news-slider p").css({"padding":"0 10px 12px 0","font-size":"97%"});

////////////////////////////////////////////////////////////////////////////////////
/// FT ///////////////////////////////////////////////////////////////////////////
    ft.css({background:z0});

    /*cc.css({"border":"3px dashed yellow"});
    hd.css({"border":"3px dashed purple"});
    mn.css({"border":"3px dashed blue"});
    m2.css({"border":"3px dashed red"});
    m3.css({"border":"3px dashed orange"});
    m4.css({"border":"3px dashed pink"});
    m5.css({"border":"3px dashed green"});
    ft.css({"border":"3px dashed gray"});*/
    },3300);
  })}}; var data=[{url:u,selector:'h1',loop:true,result:[{name:'title',find:'h1',grab:{by:'text',value:''}},{name:'link',find:'h2 a',grab:{by:'attr',value:'href'}}]}]; ygrab(data,function(result){console.log(JSON.stringify(result,null,2))});

});
