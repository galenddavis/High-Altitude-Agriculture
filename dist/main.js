!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=3)}([function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);i(1),i(1),i(0);var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.stage=0,this.counter=0,this.height=95,this.width=65,this.ctx=e.ctx,this.player=e,this.plant=document.getElementById("baby-plant"),this.plantX=1===this.player.state?-50:70,this.position={x:this.player.position.x+this.plantX,y:this.player.position.y+5}}var e,i,s;return e=t,(i=[{key:"update",value:function(t){this.draw(t),this.counter>=1e3&&this.grow1(),this.counter>=4e3&&this.grow2(),this.counter+=5}},{key:"grow1",value:function(){0===this.stage&&(this.stage+=1,this.plant=document.getElementById("middle-plant"),this.ctx.drawImage(this.plant,this.position.x,this.position.y,this.width,this.height))}},{key:"grow2",value:function(){1===this.stage&&(this.stage+=1,this.plant=document.getElementById("adult-plant"),this.ctx.drawImage(this.plant,this.position.x,this.position.y,this.width,this.height))}},{key:"draw",value:function(t){this.player.plants.length<1||t.drawImage(this.plant,this.position.x,this.position.y,this.width,this.height)}}])&&n(e.prototype,i),s&&n(e,s),t}();function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e,i,n,s,o){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.keys=[],this.ctx=s,this.width=n,this.height=n,this.plants=[],this.seeds=10,this.oxygen=o,this.position={x:e,y:i},this.state=0,this.player=document.getElementById("player-right"),document.addEventListener("keydown",(function(t){a.keys=a.keys||[],a.keys[t.key]=!0})),document.addEventListener("keyup",(function(t){a.keys[t.key]=!1})),document.addEventListener("keydown",(function(t){if("e"===t.key&&a.seeds>=1&&a.seeds<=10)for(var e=0;e<1;e++)a.plant()})),document.addEventListener("keydown",(function(t){"q"===t.key&&a.pick()}))}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){var e=this;t.font="50px DotGothic16",this.seeds<=0?t.fillStyle="red":t.fillStyle="white",t.fillText("Seeds: "+this.seeds+"/10",1050,200),t.drawImage(this.player,this.position.x,this.position.y,this.height,this.width),this.seeds<=0&&(t.fillText("Time to Harvest:",355,200),document.getElementById("adult-plant")),this.plants.forEach((function(i){i.position.y>e.position.y?(t.drawImage(e.player,e.position.x,e.position.y,e.height,e.width),i.update(e.ctx)):(i.update(e.ctx),t.drawImage(e.player,e.position.x,e.position.y,e.height,e.width))}))}},{key:"update",value:function(t,e){this.draw(e),t&&(this.keys&&this.keys.ArrowUp&&(this.position.y-=5),this.keys&&this.keys.ArrowDown&&(this.position.y+=5),this.keys&&this.keys.ArrowLeft&&(this.state=1,this.player=document.getElementById("player-left"),this.position.x-=5),this.keys&&this.keys.ArrowRight&&(this.state=0,this.player=document.getElementById("player-right"),this.position.x+=5),this.position.y<150&&(this.position.y=150),this.position.y+this.height>760&&(this.position.y=760-this.height),this.position.x<0&&(this.position.x=0),this.position.x+this.width>1400&&(this.position.x=1400-this.width))}},{key:"nearPlants",value:function(t){for(var e=0;e<this.plants.length;e++){var i=Math.abs(t.position.x+t.width/2-(this.plants[e].position.x+this.plants[e].width/2)),n=Math.abs(t.position.y+t.height/2-(this.plants[e].position.y+this.plants[e].height/2));if(i<=20&&n<=20)return!0}return!1}},{key:"plant",value:function(){var t=new s(this);0===this.plants.length?(this.plants.push(t),this.plants[this.plants.length-1].draw(this.ctx),this.seeds-=1):this.nearPlants(t)||(this.plants.push(t),this.plants[this.plants.length-1].draw(this.ctx),this.seeds-=1)}},{key:"pick",value:function(){var t=this;this.seeds<=8&&this.plants.forEach((function(e){if(Math.abs(t.position.x+t.width/2-(e.position.x+e.width/2))<=40&&Math.abs(t.position.y+t.height/2-(e.position.y+e.height/2))<=40&&2===e.stage){var i=t.plants.indexOf(e);t.plants.splice(i,1),t.seeds+=2,t.oxygen.increaseO2()}}))}}])&&o(e.prototype,i),n&&o(e,n),t}();e.default=a},function(t,e){t.exports=[30,50,85],t.exports=[25,25,55]},function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(2);var n=i(0);function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e,i,n,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.height=e,this.width=i,this.position={x:n,y:s},this.window=new Image,this.window.src="src/assets/images/planet_window_cracked.png"}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.window,15,0,1370,140)}}])&&s(e.prototype,i),n&&s(e,n),t}();function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e,i,n,s,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.height=e,this.width=i,this.amount=2*i,this.speed=o,this.color="#57f954",this.position={x:n,y:s},this.game=document.querySelector("#game-screen"),this.gameOver=document.querySelector("#game-over"),this.ctx2=this.gameOver.getContext("2d")}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){this.update(),t.fillStyle=this.width>120?this.color:"red",t.fillRect(this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.width<=1?(this.speed=0,this.game.style.display="none",this.gameOver.style.display="block"):this.width>=735?this.width=734:this.reduceO2()}},{key:"reduceO2",value:function(){this.width+=this.speed}},{key:"increaseO2",value:function(){this.width+=50}}])&&a(e.prototype,i),n&&a(e,n),t}();function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.floor=document.getElementById("floor-background"),this.oxygen=new r(37,600,63,55,-.4),this.player=new n.default(300,500,100,this.ctx,this.oxygen),this.wall=new o(1370,140,15,0),this.game=document.querySelector("#game-screen"),this.gameOver=document.querySelector("#game-over"),this.ctx2=this.gameOver.getContext("2d")}var e,i,s;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.floor,0,0,1400,760),this.wall.draw(t),this.oxygen.draw(t),this.player.draw(t)}},{key:"update",value:function(t,e){this.draw(e),this.player.update(t,e)}},{key:"lose",value:function(){this.oxygen=new r(37,600,63,55,-.4),this.player=new n.default(300,500,100,this.ctx,this.oxygen)}}])&&h(e.prototype,i),s&&h(e,s),t}();function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.background=document.getElementById("game-start-img"),this.ship=document.getElementById("ship-sprites"),this.canWidth=1400,this.canHeight=760,this.x=0,this.y=0,this.srcX=0,this.srcY=0,this.sheetWidth=7749,this.sheetHeight=202,this.frameCount=27,this.width=this.sheetWidth/this.frameCount,this.height=this.sheetHeight,this.currentFrame=0,this.frameCounter=0}var e,i,n;return e=t,(i=[{key:"update",value:function(){this.frameCounter+=1,8===this.frameCounter&&(this.currentFrame=++this.currentFrame%this.frameCount,this.srcX=this.currentFrame*this.width,this.srcY=0,this.frameCounter=0)}},{key:"draw",value:function(t){this.update(),t.drawImage(this.background,0,0),t.drawImage(this.ship,this.srcX,this.srcY,this.width,this.height,540,200,287,202),t.font="50px DotGothic16",t.fillStyle="white",t.fillText("Click Anywhere to Start",400,480)}}])&&u(e.prototype,i),n&&u(e,n),t}();function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.background=document.getElementById("game-start-img")}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.background,0,0),t.font="50px DotGothic16",t.fillStyle="red",t.fillText("GAME OVER",580,175),t.font="40px DotGothic16",t.fillStyle="white",t.fillText("Each of us have a gift, given us freely by the universe",160,275),t.fillText("And each of us with every breath gives something back",175,375),t.font="45px DotGothic16",t.fillText("- Kim Stanley Robinson, Red Mars",190,485),t.font="30px DotGothic16",t.fillText("Click Anywhere to Live Again",500,600)}}])&&d(e.prototype,i),n&&d(e,n),t}();window.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("#game-screen"),e=t.getContext("2d"),i=document.querySelector("#game-start"),n=i.getContext("2d"),s=document.querySelector("#game-over"),o=s.getContext("2d");t.width=1400,t.height=760,i.width=1400,i.height=760,s.width=1400,s.height=760;var a=new c(n),r=new l(e),h=new f(o),u=0;function d(i){e.clearRect(0,0,1400,760);var n=i-u;u=i,r.update(n,e),"block"===t.style.display&&requestAnimationFrame(d)}!function t(e){n.clearRect(0,0,1400,760),a.draw(n),requestAnimationFrame(t)}(),function t(e){o.clearRect(0,0,1400,760),h.draw(o),"block"===s.style.display&&r.lose(),requestAnimationFrame(t)}(),i.addEventListener("click",(function(){i.style.display="none",t.style.display="block",d()})),s.addEventListener("click",(function(){s.style.display="none",i.style.display="block"}))}))}]);
//# sourceMappingURL=main.js.map