//const { domainToUnicode } = require("url");

var arrs=[];

function play()
{
  if(arrs != null && arrs.length > 0)
  {
    window.localStorage.setItem("arr",arrs);
    window.location.href="play.html";
  }
  else{
  alert("当前没有按下任何键");}
}

//键盘事件从字母A开始
document.onkeydown=function(event){
  var au = document.getElementById("myAudio");
   var notice = document.getElementById("myDIV");
    notice.style.display="none";
        var e = event || window.event || arguments.callee.caller.arguments[0];
      
        if(e && e.keyCode==65){ // 按 A 
          //要做的事情
          setcolor();
          setcurrent("A");
          au.pause();  //暂停事件
          au.setAttribute("src","./assert/music/A.m4a");  //设置需要读取的音频文件
          au.play();  //播放
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/A.png");
          imgcurr.style.display="block";
        }
       
        if(e && e.keyCode==66){ // 按 B
          setcolor();
          //要做的事情
          setcurrent("B");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/B.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/B.png");
          imgcurr.style.display="block";
        }
 
 if(e && e.keyCode==67){ // 按 C
  setcolor();
  setcurrent("C");
  //严格来讲用FOR循环.
  au.pause();
  au.setAttribute("src","./assert/music/C.m4a");
  au.play();
  var imgcurr = document.getElementById("currentKey");
  imgcurr.setAttribute("src","./assert/C.png");
  imgcurr.style.display="block";
}
          if(e && e.keyCode==68){ // 按 D
            setcolor();
            //要做的事情
            setcurrent("B");
            //严格来讲用FOR循环.
            au.pause();
            au.setAttribute("src","./assert/music/D.m4a");
            au.play();
            var imgcurr = document.getElementById("currentKey");
            imgcurr.setAttribute("src","./assert/D.png");
            imgcurr.style.display="block";
          }

            if(e && e.keyCode==69){ // 按 E
              setcolor();
              //要做的事情
              setcurrent("E");
              //严格来讲用FOR循环.
              au.pause();
              au.setAttribute("src","./assert/music/E.m4a");
              au.play();
              var imgcurr = document.getElementById("currentKey");
              imgcurr.setAttribute("src","./assert/E.png");
              imgcurr.style.display="block";
            }


            if(e && e.keyCode==70){ // 按 F
              setcolor();
              //要做的事情
              setcurrent("F");
              //严格来讲用FOR循环.
              au.pause();
              au.setAttribute("src","./assert/music/F.m4a");
              au.play();
              var imgcurr = document.getElementById("currentKey");
              imgcurr.setAttribute("src","./assert/F.png");
              imgcurr.style.display="block";
            }
            if(e && e.keyCode==71){ // 按 G
              setcolor();
              //要做的事情
              setcurrent("G");
              //严格来讲用FOR循环.
              au.pause();
              au.setAttribute("src","./assert/music/G.m4a");
              au.play();
              var imgcurr = document.getElementById("currentKey");
              imgcurr.setAttribute("src","./assert/G.png");
              imgcurr.style.display="block";
            }
            if(e && e.keyCode==72){ // 按 H
              setcolor();
              //要做的事情
              setcurrent("H");
              //严格来讲用FOR循环.
              au.pause();
              au.setAttribute("src","./assert/music/H.m4a");
              au.play();
              var imgcurr = document.getElementById("currentKey");
              imgcurr.setAttribute("src","./assert/H.png");
              imgcurr.style.display="block";
            }

            if(e && e.keyCode==73){ // 按 I
              setcolor();
              //要做的事情
              setcurrent("I");
              //严格来讲用FOR循环.
              au.pause();
              au.setAttribute("src","./assert/music/I.m4a");
              au.play();
              var imgcurr = document.getElementById("currentKey");
              imgcurr.setAttribute("src","./assert/I.png");
              imgcurr.style.display="block";
            }
              
        
        if(e && e.keyCode==74){ // 按 J
          setcolor();
          //要做的事情
          setcurrent("J");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/J.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/J.png");
          imgcurr.style.display="block";
        }

        if(e && e.keyCode==75){ // 按 K
          setcolor();
          //要做的事情
          setcurrent("K");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/K.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/K.png");
          imgcurr.style.display="block";
        }
        if(e && e.keyCode==76){ // 按 L
          setcolor();
          //要做的事情
          setcurrent("L");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/L.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/L.png");
          imgcurr.style.display="block";
        }

        if(e && e.keyCode==77){ // 按 M
          setcolor();
          //要做的事情
          setcurrent("M");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/M.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/M.png");
          imgcurr.style.display="block";
        }
        if(e && e.keyCode==78){ // 按 N
          setcolor();
          //要做的事情
          setcurrent("N");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/N.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/N.png");
          imgcurr.style.display="block";
        }

        if(e && e.keyCode==79){ // 按 o
          setcolor();
          //要做的事情
          setcurrent("O");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/O.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/O.png");
          imgcurr.style.display="block";
        }
        if(e && e.keyCode==80){ // 按 p
          setcolor();
          //要做的事情
          setcurrent("P");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/P.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/P.png");
          imgcurr.style.display="block";
        }

    
    if(e && e.keyCode==81){ // 按 q
      setcolor();
      //要做的事情
      setcurrent("Q");
      //严格来讲用FOR循环.
      au.pause();
      au.setAttribute("src","./assert/music/Q.m4a");
      au.play();
      var imgcurr = document.getElementById("currentKey");
      imgcurr.setAttribute("src","./assert/Q.png");
      imgcurr.style.display="block";
    }
    if(e && e.keyCode==82){ // 按 r
      setcolor();
      //要做的事情
      setcurrent("R");
      //严格来讲用FOR循环.
      au.pause();
      au.setAttribute("src","./assert/music/R.m4a");
      au.play();
      var imgcurr = document.getElementById("currentKey");
      imgcurr.setAttribute("src","./assert/R.png");
      imgcurr.style.display="block";
    }

    if(e && e.keyCode==83){ // 按 s
      setcolor();
      //要做的事情
      setcurrent("S");
      //严格来讲用FOR循环.
      au.pause();
      au.setAttribute("src","./assert/music/S.m4a");
      au.play();
      var imgcurr = document.getElementById("currentKey");
      imgcurr.setAttribute("src","./assert/S.png");
      imgcurr.style.display="block";
    }

    if(e && e.keyCode==84){ // 按 t
      setcolor();
          //要做的事情
          setcurrent("T");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/T.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/T.png");
          imgcurr.style.display="block";
        }
    if(e && e.keyCode==85){ // 按 u
      setcolor();
      //要做的事情
      setcurrent("U");
      //严格来讲用FOR循环.
      au.pause();
      au.setAttribute("src","./assert/music/U.m4a");
      au.play();
      var imgcurr = document.getElementById("currentKey");
      imgcurr.setAttribute("src","./assert/U.png");
      imgcurr.style.display="block";
    }
    if(e && e.keyCode==86){ // 按 v
      setcolor();
          //要做的事情
          setcurrent("V");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/music/V.m4a");
          au.play();
          var imgcurr = document.getElementById("currentKey");
          imgcurr.setAttribute("src","./assert/V.png");
          imgcurr.style.display="block";
        }
    if(e && e.keyCode==87){ // 按 w
      setcolor();
      //要做的事情
      setcurrent("W");
      //严格来讲用FOR循环.
      au.pause();
      au.setAttribute("src","./assert/music/W.m4a");
      au.play();
      var imgcurr = document.getElementById("currentKey");
      imgcurr.setAttribute("src","./assert/W.png");
      imgcurr.style.display="block";
    }


    if(e && e.keyCode==88){ // 按 x
      setcolor();
      //要做的事情
      setcurrent("X");
      //严格来讲用FOR循环.
      au.pause();
      au.setAttribute("src","./assert/music/X.m4a");
      au.play();
      var imgcurr = document.getElementById("currentKey");
      imgcurr.setAttribute("src","./assert/X.png");
      imgcurr.style.display="block";
    }
    if(e && e.keyCode==89){ // 按 y
      setcolor();
      //要做的事情
      setcurrent("Y");
      //严格来讲用FOR循环.
      au.pause();
      au.setAttribute("src","./assert/music/Y.m4a");
      au.play();
      var imgcurr = document.getElementById("currentKey");
      imgcurr.setAttribute("src","./assert/Y.png");
      imgcurr.style.display="block";
    }
      

      if(e && e.keyCode==90){ // 按 z
        setcolor();
        //要做的事情
        setcurrent("Z");
        //严格来讲用FOR循环.
        au.pause();
        au.setAttribute("src","./assert/music/Z.m4a");
        au.play();
        var imgcurr = document.getElementById("currentKey");
        imgcurr.setAttribute("src","./assert/Z.png");
        imgcurr.style.display="block";
      
      }
      
    }; 


    ///清除所有按过的键的背景色
    function setcolor()
    {
        var big = document.getElementById("divbig");
        var arr = big.children;
        var liarr = arr[0].children;  //获取所有的LI标签 
        for(var i=0;i<liarr.length;i++) //循环LI标签
        {
         var id= liarr[i].id;
         document.getElementById(id).style.backgroundColor="White";
         liarr[i].style.color="Black";
         //alert('ASDFASDF ');//弹出我们需要输出的内容 
        }
    }

    function setcurrent(id)
    {
      var cur = document.getElementById(id);
      cur.style.backgroundColor="#B9B7BD";
      cur.style.color="White";
    }
  
    function myFunction() {
      var x = document.getElementById("myDIV");
if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  //   $(".btn").click(function() {
  //     var lable = $(".btn").text().trim();
  //     if(lable == "Hide") {
  //       $(".btn").text("Show");
  //       $(".myText").hide();
  //     }
  //     else {
  //       $(".btn").text("Hide");
  //       $(".myText").show();
  //     }     
  // });


