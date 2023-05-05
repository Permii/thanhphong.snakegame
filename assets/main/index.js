System.register("chunks:///_virtual/FoodPool.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Results.ts"],(function(o){"use strict";var e,t,i,n,r,s,a,l,h,d,f,u;return{setters:[function(o){e=o.applyDecoratedDescriptor,t=o.inheritsLoose,i=o.initializerDefineProperty,n=o.assertThisInitialized},function(o){r=o.cclegacy,s=o._decorator,a=o.Prefab,l=o.Node,h=o.instantiate,d=o.NodePool,f=o.Component},function(o){u=o.Results}],execute:function(){var c,p,b,C,P,y,g,m,v,F,B;r._RF.push({},"6b6b58Gs3pKXI7d+vqsci+a","FoodPool",void 0);var H=s.ccclass,w=s.property;o("FoodPool",(c=H("FoodPool"),p=w({type:u}),b=w({type:a}),C=w({type:a}),P=w({type:l}),c((m=e((g=function(o){function e(){for(var e,t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return e=o.call.apply(o,[this].concat(r))||this,i(e,"result",m,n(e)),i(e,"bonusPrefab",v,n(e)),i(e,"foodPrefab",F,n(e)),i(e,"foodpoolHome",B,n(e)),e.foodChain=[],e.pool=new d,e.createFood=null,e.createBonus=null,e}t(e,o);var r=e.prototype;return r.initPool=function(){for(var o=0;o<5;o++){var e=h(this.foodPrefab);if(4==o){var t=h(this.bonusPrefab);this.foodChain.push(t)}else this.foodChain.push(e)}this.foodpoolHome.addChild(this.foodChain[0]),console.log(this.foodChain)},r.scoringMechanic=function(){"Food_Bonus"!==this.foodChain[0].name?(this.result.addFoodScore(),this.foodChain.shift()):(this.result.addBonusScore(),this.foodChain.shift()),console.log(this.foodChain)},r.addPool=function(){this.foodChain.length>0?"Food_Bonus"!==this.foodChain[0].name?(this.createFood=h(this.foodPrefab),this.foodpoolHome.addChild(this.createFood)):(this.createBonus=h(this.bonusPrefab),this.foodpoolHome.addChild(this.createBonus)):0==this.foodChain.length&&this.initPool()},r.reset=function(){this.foodpoolHome.removeAllChildren(),this.pool.clear();for(var o=0;o<this.foodChain.length;o++)this.foodChain[o].destroy();this.foodChain.length=0,this.initPool()},e}(f)).prototype,"result",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(g.prototype,"bonusPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(g.prototype,"foodPrefab",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(g.prototype,"foodpoolHome",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=g))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/FoodSpawn.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,e,n,i,r,s,a,c,d,p,h,f;return{setters:[function(o){t=o.applyDecoratedDescriptor,e=o.inheritsLoose,n=o.initializerDefineProperty,i=o.assertThisInitialized},function(o){r=o.cclegacy,s=o._decorator,a=o.Node,c=o.director,d=o.Canvas,p=o.UITransform,h=o.Vec3,f=o.Component}],execute:function(){var u,l,g,m,y;r._RF.push({},"a3df8eHT5BAAKMw4js/MNZn","FoodSpawn",void 0);var v=s.ccclass,w=s.property,P=function(o,t){return Math.floor(Math.random()*(t-o)+o)},C=function(o,t){return Math.random()<.5?o:t};o("FoodSpawn",(u=v("FoodSpawn"),l=w({type:a}),u((y=t((m=function(o){function t(){for(var t,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return t=o.call.apply(o,[this].concat(r))||this,n(t,"food",y,i(t)),t._grid=20,t.foodPos=new h,t.moveSpeed=200,t}e(t,o);var r=t.prototype;return r.onLoad=function(){this.initPos()},r.initPos=function(){var o=c.getScene().getComponentInChildren(d);o.getComponent(p).width,o.getComponent(p).height,this.food.getComponent(p).width,this.food.getComponent(p).height;this.foodPos.x=P(-15,15)*this._grid-C(-10,10),this.foodPos.y=P(-11,11)*this._grid-C(-10,10),this.food.setPosition(this.foodPos)},t}(f)).prototype,"food",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=m))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FoodPool.ts","./Movement.ts","./SnakePool.ts","./Results.ts","./Tutorial.ts"],(function(e){"use strict";var t,i,o,n,r,s,a,u,l,c,h,p,f,m,y,d,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,a=e.input,u=e.Input,l=e.KeyCode,c=e.director,h=e.game,p=e.Component},function(e){f=e.FoodPool},function(e){m=e.Movement},function(e){y=e.SnakePool},function(e){d=e.Results},function(e){b=e.Tutorial}],execute:function(){var g,v,k,w,T,C,P,z,F,G,R,E,M;r._RF.push({},"401e3xzNhFM0YQt0LaW/51/","GameCtrl",void 0);var O=s.ccclass,S=s.property;e("GameCtrl",(g=O("GameCtrl"),v=S({type:b}),k=S({type:d}),w=S({type:m}),T=S({type:y}),C=S({type:f}),g((F=t((z=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,o(t,"tutorial",F,n(t)),o(t,"result",G,n(t)),o(t,"snakeMovement",R,n(t)),o(t,"snakeFunction",E,n(t)),o(t,"foodQueue",M,n(t)),t.isOver=!1,t.isToggle=!0,t}i(t,e);var r=t.prototype;return r.onLoad=function(){this.initListener(),this.startGame()},r.initListener=function(){a.on(u.EventType.KEY_DOWN,this.onKeyDown,this)},r.onKeyDown=function(e){switch(e.keyCode){case l.KEY_R:this.resetGame();break;case l.ESCAPE:c.pause();break;case l.SPACE:!0===this.isOver||c.resume();break;case l.KEY_T:this.showTutorial()}},r.startGame=function(){this.isOver=!1,this.foodQueue.initPool(),this.result.hideResult()},r.resetGame=function(){this.isOver=!1,this.snakeMovement.resetSnake(),this.foodQueue.reset(),this.snakeFunction.reset(),this.result.resetScore(),c.resume()},r.gameOver=function(){this.isOver=!0,this.result.showResult(),c.pause()},r.foodCreate=function(){this.foodQueue.addPool()},r.showTutorial=function(){this.isToggle=!this.isToggle,this.isToggle?this.tutorial.show():this.tutorial.hide()},r.update=function(e){h.frameRate=20},t}(p)).prototype,"tutorial",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=t(z.prototype,"result",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=t(z.prototype,"snakeMovement",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=t(z.prototype,"snakeFunction",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=t(z.prototype,"foodQueue",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=z))||P));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./FoodPool.ts","./FoodSpawn.ts","./GameCtrl.ts","./Movement.ts","./Results.ts","./SnakeFunction.ts","./SnakePool.ts","./Tutorial.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Movement.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(s){"use strict";var e,t,n,i,o,a,r,h,c,k,P,p,u,g,D,l;return{setters:[function(s){e=s.applyDecoratedDescriptor,t=s.inheritsLoose,n=s.initializerDefineProperty,i=s.assertThisInitialized},function(s){o=s.cclegacy,a=s._decorator,r=s.Node,h=s.input,c=s.Input,k=s.KeyCode,P=s.director,p=s.Canvas,u=s.game,g=s.UITransform,D=s.Vec3,l=s.Component}],execute:function(){var d,y,m,R,f;o._RF.push({},"857ceDPpA5HNI1Td+znsGRi","Movement",void 0);var T,C=a.ccclass,v=a.property;!function(s){s[s.UP=0]="UP",s[s.DOWN=1]="DOWN",s[s.RIGHT=2]="RIGHT",s[s.LEFT=3]="LEFT"}(T||(T={}));s("Movement",(d=C("Movement"),y=v({type:r}),d((f=e((R=function(s){function e(){for(var e,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return e=s.call.apply(s,[this].concat(o))||this,n(e,"snake",f,i(e)),e.snakePos=new D,e.grid=20,e.snakeDirection=void 0,e.canPress=!0,e}t(e,s);var o=e.prototype;return o.onLoad=function(){this.initPos(),h.on(c.EventType.KEY_DOWN,this.onKeyDown,this),this.snakeDirection=T.RIGHT},o.onKeyDown=function(s){var e=this,t=function(){e.canPress=!1,console.log("Cant press"),setTimeout((function(){e.canPress=!0,console.log("Can press")}),50)};switch(s.keyCode){case k.ARROW_RIGHT:1==this.canPress&&this.snakeDirection!==T.LEFT&&(this.snakeDirection=T.RIGHT),t();break;case k.ARROW_LEFT:1==this.canPress&&this.snakeDirection!==T.RIGHT&&(this.snakeDirection=T.LEFT),t();break;case k.ARROW_UP:1==this.canPress&&this.snakeDirection!==T.DOWN&&(this.snakeDirection=T.UP),t();break;case k.ARROW_DOWN:1==this.canPress&&this.snakeDirection!==T.UP&&(this.snakeDirection=T.DOWN),t()}},o.initPos=function(){P.getScene().getComponentInChildren(p);this.snakePos.x=-10,this.snakePos.y=-10,this.snake.setPosition(this.snakePos)},o.update=function(s){u.frameRate=20;var e=P.getScene().getComponentInChildren(p);this.snakePos=this.snake.position,this.snakeDirection===T.UP?(this.snakePos.y+=this.grid,this.snake.setPosition(this.snakePos)):this.snakeDirection==T.LEFT?(this.snakePos.x-=this.grid,this.snake.setPosition(this.snakePos)):this.snakeDirection==T.RIGHT?(this.snakePos.x+=this.grid,this.snake.setPosition(this.snakePos)):this.snakeDirection==T.DOWN&&(this.snakePos.y-=this.grid,this.snake.setPosition(this.snakePos)),this.snakePos.x<-e.getComponent(g).width/2?this.snakePos.x=e.getComponent(g).width/2-10:this.snakePos.x>e.getComponent(g).width/2?this.snakePos.x=-e.getComponent(g).width/2+10:this.snakePos.y<-e.getComponent(g).height/2?this.snakePos.y=e.getComponent(g).height/2-10:this.snakePos.y>e.getComponent(g).height/2&&(this.snakePos.y=-e.getComponent(g).height/2+10),this.snake.setPosition(this.snakePos)},o.resetSnake=function(){this.initPos(),this.snakeDirection=T.RIGHT},e}(l)).prototype,"snake",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=R))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/Results.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,i,o,c,s,n,a,h;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){c=e.cclegacy,s=e._decorator,n=e.Label,a=e.Node,h=e.Component}],execute:function(){var u,l,p,S,d,g,b,f,y;c._RF.push({},"2c543psZypM1rJiTYGu9rYM","Results",void 0);var v=s.ccclass,m=s.property;e("Results",(u=v("Results"),l=m({type:n}),p=m({type:n}),S=m({type:a}),u((b=r((g=function(e){function r(){for(var r,t=arguments.length,c=new Array(t),s=0;s<t;s++)c[s]=arguments[s];return r=e.call.apply(e,[this].concat(c))||this,i(r,"scoreLabel",b,o(r)),i(r,"highScore",f,o(r)),i(r,"highScoreBorder",y,o(r)),r.maxScore=0,r.currentScore=0,r}t(r,e);var c=r.prototype;return c.updateScore=function(e){this.currentScore=e,this.scoreLabel.string=""+this.currentScore},c.addFoodScore=function(){this.updateScore(this.currentScore+5)},c.addBonusScore=function(){this.updateScore(this.currentScore+20)},c.showResult=function(){this.maxScore=Math.max(this.currentScore,this.maxScore),this.highScore.string="High score: "+this.maxScore,this.highScore.node.active=!0,this.highScoreBorder.active=!0,this.scoreLabel.node.active=!1},c.hideResult=function(){this.highScoreBorder.active=!1,this.highScore.node.active=!1},c.resetScore=function(){this.updateScore(0),this.hideResult(),this.scoreLabel.node.active=!0,this.scoreLabel.string=""+this.currentScore},r}(h)).prototype,"scoreLabel",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=r(g.prototype,"highScore",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=r(g.prototype,"highScoreBorder",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=g))||d));c._RF.pop()}}}));

System.register("chunks:///_virtual/SnakeFunction.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SnakePool.ts","./Results.ts","./FoodPool.ts"],(function(e){"use strict";var o,t,n,i,a,r,l,s,c,u,d,p,h,f,g,C,y;return{setters:[function(e){o=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,l=e.Node,s=e.find,c=e.Collider2D,u=e.Contact2DType,d=e.Sprite,p=e.Color,h=e.director,f=e.Component},function(e){g=e.SnakePool},function(e){C=e.Results},function(e){y=e.FoodPool}],execute:function(){var m,k,b,P,v,S,F,E,T,w,z;a._RF.push({},"cd71aKq4r1LLaSnMqiFULp4","SnakeFunction",void 0);var D=r.ccclass,L=r.property;e("SnakeFunction",(m=D("SnakeFunction"),k=L({type:y}),b=L({type:g}),P=L({type:l}),v=L({type:C}),m((E=o((F=function(e){function o(){for(var o,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return o=e.call.apply(e,[this].concat(a))||this,n(o,"foodPool",E,i(o)),n(o,"snakePool",T,i(o)),n(o,"snakeHead",w,i(o)),n(o,"result",z,i(o)),o.game=void 0,o.isCollided=!1,o.isEaten=!1,o}t(o,e);var a=o.prototype;return a.onLoad=function(){this.game=s("GameCtrl").getComponent("GameCtrl");var e=this.node.getComponent(c);e&&(e.on(u.BEGIN_CONTACT,this.onBeginContact,this),e.on(u.END_CONTACT,this.onEndContact,this))},a.onBeginContact=function(e,o,t){var n=this;this.isCollided=!0,2===o.tag&&(this.snakeHead.getComponent(d).color=new p(255,0,0,255),this.snakeHead.setSiblingIndex(this.snakePool.node.children.length),this.game.gameOver(),h.pause()),1===o.tag&&setTimeout((function(){n.isEaten=!0,o.node.destroy(),n.snakePool.addPool(),n.foodPool.scoringMechanic(),n.game.foodCreate()}),0)},a.onEndContact=function(e,o,t){var n=this;this.scheduleOnce((function(){n.isEaten=!1}),0),this.isCollided=!1},o}(f)).prototype,"foodPool",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=o(F.prototype,"snakePool",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=o(F.prototype,"snakeHead",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=o(F.prototype,"result",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=F))||S));a._RF.pop()}}}));

System.register("chunks:///_virtual/SnakePool.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,a,r,s,i,o,l,h,c,p,u,k;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,a=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){s=e.cclegacy,i=e._decorator,o=e.Prefab,l=e.Node,h=e.instantiate,c=e.Sprite,p=e.Color,u=e.Vec3,k=e.Component}],execute:function(){var y,f,d,P,g,b,m,A,S;s._RF.push({},"9d9f1pDn6hGu7U6ns5bA1mB","SnakePool",void 0);var v=i.ccclass,w=i.property;e("SnakePool",(y=v("SnakePool"),f=w({type:o}),d=w({type:l}),P=w({type:l}),y((m=t((b=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s))||this,a(t,"snakePrefab",m,r(t)),a(t,"snakePoolHome",A,r(t)),a(t,"snake",S,r(t)),t.createSnake=null,t.snakeArray=[],t.segmentPos=new u,t}n(t,e);var s=t.prototype;return s.onLoad=function(){this.snakeArray.push(this.snake)},s.addPool=function(){this.createSnake=h(this.snakePrefab),this.snakePoolHome.addChild(this.createSnake),this.snakeArray.push(this.createSnake),this.segmentPos=this.snakeArray[this.snakeArray.length-1].position,this.createSnake.setPosition(this.segmentPos)},s.reset=function(){for(var e=1;e<this.snakeArray.length;e++)this.snakeArray[e].destroy();this.snakeArray.length=0,this.snakeArray.push(this.snake),this.snake.getComponent(c).color=new p(18,230,0,255)},s.update=function(e){this.node.getChildByName("Snake_head");for(var t=this.snakeArray.length-1;t>0;t--)this.snakeArray[t].position=this.snakeArray[t-1].position},t}(k)).prototype,"snakePrefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=t(b.prototype,"snakePoolHome",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=t(b.prototype,"snake",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=b))||g));s._RF.pop()}}}));

System.register("chunks:///_virtual/Tutorial.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,r,i,o,n,a,c,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,c=t.Node,l=t.Component}],execute:function(){var u,s,p,f,h;n._RF.push({},"3f2c0xLHttOfaIYx+hPcZ2b","Tutorial",void 0);var y=a.ccclass,d=a.property;t("Tutorial",(u=y("Tutorial"),s=d({type:c}),u((h=e((f=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,i(e,"toturialLabel",h,o(e)),e}r(e,t);var n=e.prototype;return n.show=function(){this.node.active=!0},n.hide=function(){this.node.active=!1},e}(l)).prototype,"toturialLabel",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=f))||p));n._RF.pop()}}}));
