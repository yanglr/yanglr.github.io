---
layout: post
date: 2011-12-09 10:21:20
title: 只学一点点：我的技术学习策略
categories:
- [技术学习, 极客玩家大白]
tags: [技术学习, 极客玩家大白]
excerpt: 只学一点点：我的技术学习策略 - 转载自xiaotie
keywords: 极客玩家大白
description: 只学一点点：我的技术学习策略 - xiaotie
topmost: true
image: https://cdn.jsdelivr.net/gh/yanglr/images/resize-box.jpg
---

> 转载自 [只学一点点：我的技术学习策略 - xiaotie](https://www.cnblogs.com/xiaotie/archive/2011/12/10/2283384.html)

> by ![极客玩家大白-xiaotie头像](https://cdn.jsdelivr.net/gh/yanglr/images/xiaotie-touxiang.jpg "极客玩家大白")

<hr/>

李敖有首诗叫《只爱一点点》 ：


不爱那么多，
只爱一点点；
别人的爱情像海深，
我的爱情浅。
不爱那么多，
只爱一点点；
别人的爱情像天长，
我的爱情短。
不爱那么多，
只爱一点点；
别人眉来又眼去，
我只偷看你一眼。


一点足够。在黄易的大唐双龙传中有个说法叫《遁去的一》，也就是说任何事情在纷杂万象之中都有一个消失的一，把这个消失的一找到，就可以事半功倍。


在学技术中，很多人纠结于掌握与精通。掌握是能够熟练的使用该技术实现自己的目标，而精通，则是对该技术的常用及半常用的场景都熟悉，能够处理常见或非常见的问题，是广泛的掌握。


在宅男和腐女眼中，万事万物皆为攻受。学习务必精通，则是绝世小受，学习只求掌握，则是偏向于攻。孙子曰：善攻者动于九天之上，善守（受）者藏于九地之下。下面看看动于九天之上的学习方法。


作为一个上个世纪就开始写网页的程序员，你如果问我这个css怎么写，这个js怎么写，我的回答一般就是两个字：“不会”。做为一个从 .NET 1.0就开始写C#程序的程序员，如果你问常见的.net问题，50%情况下我的回答还是“不会”或者“查MSDN”。有不少人加我QQ讨论技术问题，我最多的回答是“不会”，“不知道”，“Google”。时至如今，也就会些用了理所当然就能记住的知识，其它的都不会，IDE的快捷键也记不住几个。当然，也有碰巧那个东西我懂的，这种情况极少。


技术是来解决问题的，不是增加心智负担的。承担进攻任务的行军不会带太多的累赘。我的开发任务中数据库、查询类的不重要，linq不用学，自从接触代码生成后，ORM的也全部都扔了，因为ORM需要学习，且可控性没有代码生成的好。自从项目主要是图形图像方面的后，asp.net等也都丢了，因为这类项目需求变动大、技术支持困难。直到后来才找到.net对我而言的遁去的一：unsafe + 指针。有了unsafe + 指针，图像程序性能大增，相比C/C++而言，生产力也得到了极大的提高——什么新东西都不用学（指针还没忘记）。


知识是基于过去经验的总结，而我们面对的是未来，因此，对于过往知识需要谨慎的辨识，对于他人经验需要参考性的采纳。MSDN中明白的说，不鼓励使用unsafe，而在.net图像程序中大量的使用后，才能感觉到它的爽。如果看到MSDN上不推荐用，看见别人也几乎不这么用，自己就给自己设置禁区，那我就找不到这个遁去的一。


下面是个更深刻的例子。今年应该是我写Flash程序的第三个年头。俺，是一个不会Flash的Flash程序员。你如果让我用Flash CS工具做一个动画，很抱歉，不会。那么看看，我会哪些？我学了哪些？我能做什么？做这些我相对于别人有哪些优势？从这个例子看看什么是进攻式学习。


普遍看来，Flash是一个动画工具。全球数百万Flash动画设计师。好吧，俺美工差，如果它是个动画工具，俺就不玩了。


在我最初看来，Flash是一个运行在绝大多数PC机上的虚拟机平台，擅长处理图形图像，可以用它来快速开发程序。这样看，就可以玩玩它。为什么？图形图像类应用是我给自己确立的方向，而Flash是一个适合的平台。


这样的认识还没有触及遁去的一。随着开发经验的增加，一个遁去的一开始浮现：


Flash是一个最简单的虚拟机，它只封装了最基本的操作（图形图像、声音、视频、XML以及现在的3D），连Button控件都没有，凡是可有可没有的都没有。
用普通的眼光看，这个虚拟机简单、弱小。换一种方式看：尺寸小，平台小，容易移植。用html5/js来写一套Flash的基本API也没多少代码。因此，Flash/AIR才这么容易的打入iOS之中，且各类平台间Flash代码保持非常好的兼容性。
Flash提供了一套简洁的API，跨各种平台。Flash以库的形式扩展（这一点与.Net很大不同），Flash CS工具里自带了一套简单、开源的UI控件库，Flex则提供了一套复杂的、全功能的UI库，这些都是Flash平台外部的（这也与.Net不同，WPF是在SDK里面的，而不是外面）。在平台外部，就拥有了很好的灵活性。
这个简单的弱小的小玩意怎么能算遁去的一呢？
算不上！
它充其量就是一个灰尘大小的卵细胞。
下面，一个微不足道的、看似毫无关联的玩意出场了：数据绑定。它就像一个小蝌蚪一样，向卵细胞游啊游，在两者接触的瞬间，一个生命诞生了！
Flash开发遁去的一就是Flash的底层API + 数据绑定。
Flash底层API很简单很少，各大平台都支持（Web，桌面，移动）。它就是中国移动全球通，什么地方都有它——我能！
光能还不行，直接用Flash底层API开发，就像用GDI+一笔笔绘制一样，麻烦的要命，直到数据绑定出现，数据绑定让基于Flash API的开发有了质的飞跃——它好我也好！


因此，掌握Flash只需要掌握两个东西：底层API和数据绑定，剩下的都是细枝末节的，用的时候查文档和搜索引擎就可以了。我们需要学的东西是多么的少，而我们能做的事情是多么的多！


首先，得学习开发语言。Flash平台的官方开发语言是actionscript3，简称as3，每当说起as3时，人们总会谈起as2，你就当as2从没出现过，了解as2一点用都没有，不闻、不问、不看。
as3和主流开发语言很类似。package 机制、类机制和java相似，继承是extends，实现接口是implements。区别：
（1）变量声明是var i:int；函数声明是：function foo(i:int):int; 不支持方法重载，支持默认参数。函数可以作为参数传递。支持闭包。
（2）Getter和Setter分别为：function get foo():int; 和function set foo(i:int):int;
（3）抛出事件：dispatchEvent;监听事件addEventListeneraddEventListener。事件支持弱引用。
（4）for each可以遍历集合；
（5）支持动态类，Object是动态类，for可以遍历Object: 

```actionscript
for (var key:String in obj) 
{
...
}
```

（6）[  ]里写元数据。常用的有三个：事件申明，嵌入资源和数据绑定：
数据绑定是 [Bindable]，这个在后面会详述。
嵌入资源的例子一看就明白：
[Embed(source="assets/blackStyle/iconPlayStart36.png")]
private var buttonForwardPlay36:Class;
事件申明用在类中，申明之后，IDE会对该类给出对应事件的智能提示，例子：
[Event(name="inited", type="flash.events.Event")] 


as3很快就学会了，拿本语法书，扫一眼就行了。不用Flash CS工具的话，主流IDE就是Flash Builder，它是基于Eclipse开发的，用过Eclipse的拿过来就会用。


下面进入主题：Flash API和数据绑定。需要掌握的Flash API：
（1）绘制的API：绘制线、绘制曲线、填充/梯度填充、蒙版、混合模式（貌似除了蒙版外，Html5都有！）
（2）滤镜和变换
（3）文本处理：TextField
（4）核心UI类：Sprite、它的生命周期及对交互的响应
上面这些是我们的钢筋水泥，下面，就用这些钢筋水泥来搭建我们自己的应用。有人可能会问：控件呢？有了数据绑定，我们并不需要控件，或者换句话说，有了数据绑定，我们可以很容易由底层API搭建自己需要的控件。
数据绑定非常容易！
数据绑定是Flex的mxml（Flex描述界面的语言）编译器提供的一个功能。下面，我们只用Flex的 mxml编译器，而不用Flex的任何控件，来从Flash API搭建我们自己的控件或其它应用。Mxml就不介绍了，看一眼就会了。下面是一个mxml中数据绑定的例子：
```xml
    <shapes:Rectangle id="background" width="{width}" height="{height}"
                       corner="{bgCorner}" corners="{bgCorners}"
                       color="{bgColor}"
                       alpha="{bgEnabled?bgAlpha:bgAlpha*0.3}"
                       borderColor="{bgBorderColor}"
                       borderThickness="{bgBorderThickness}"
                       fillAlpha="{bgFillAlpha}" borderAlpha="{bgBorderAlpha}"
                       />
```

很简单、很容易理解、理解了就再也忘不了：大括号{}中的就是数据绑定内容，{}中的所有可绑定的变量构成绑定链，绑定链上的绑定源出现了任何变化，都会激发运算，将运算结果付给被绑定的字段。
如果给一个类加了元数据[Bindable]，则该类实例的字段和getter/setter就成了绑定源。如果不想把全部字段和getter/setter弄成绑定源，可对字段或setter单独增加元数据[Bindable]。
这个数据绑定比WPF/SL的数据绑定简洁多了、易用多了。


下面，就靠这些开始征程。
先解决多语言的问题：
```java
package 
{
    import orc.common.RpcRequest;

    public dynamic class l extends Object
    {
        [Bindable]
        public static var i:l = new l();
        
        public function s(key:String, defaultString:String = null):String
        {
            return getString(key,defaultString);
        }
        
        public static function s(key:String, defaultString:String = null):String
        {
            return i.s(key,defaultString);
        }


        public function getString(key:String, defaultString:String = null):String
        {
            if(this.hasOwnProperty(key)==false) 
            {
                var lowKey:String = key.toLowerCase();
                if(this.hasOwnProperty(lowKey) == false)
                {
                    return defaultString ? defaultString : key;
                }
                else
                {
                    return this[lowKey];
                }
            }
            else
            {
                return this[key];
            }
        }
        
        public static function loadRemote(url:String, callback:Function = null, failCallback:Function = null):void
        {
            new RpcRequest(url, null,
                function(obj:Object):void
                {
                    loadXml(new XML(obj));
                    if(callback != null) callback();
                },
                failCallback
            );
        }
        
        public static function loadXml(xml:XML):void
        {
            if(xml == null) return;
            
            var lang:l = new l();
            
            // 第一遍
            for each(var node: XML in xml.item)
            {
                lang[node.@key]=String(node.@value);
            }
            
            // 第二遍，存储小写的key
            for each(var node: XML in xml.item)
            {
                var lkey:String = String(node.@key).toLowerCase();
                if(lang.hasOwnProperty(lkey) == false)
                {
                    lang[lkey] = String(node.@value); 
                }
            }
            
            i = lang;
        }
    }
}
```

RpcRequest 的代码就不贴了，它的功能就是从url取回个xml文件。这个类在根命名空间中，这样不用import就能用了。名字是l，代表language，有一个静态实例i，代表instance，它设为可**Bindable**，方法s代表取的是string。Xml文件中存储的是键值对，这样写：
`<Button label="{l.i.s('Yes')}" />`
就绑定了多语言，如果不加载任何语言文件的话，显示的是“Yes”，如果加载了的话，如果该文件中存在键“Yes”，则加载对应的值，如果不存在，则寻找是否有小写后为“yes”的键，加载对应的值，如果都不存在，则显示“Yes”。而当更改语言时，由于i发生了变化，由于数据绑定的关系，该Button的label值也马上得到了更新。
寥寥几行代码就实现了多语言解决方案。


接着是三个基础类：Application、BaseComponent 和 BaseContainer。Application 顾名思义，是App的入口类，提供了一些基本的功能。BaseComponent 是UI类的基类。BaseContainer 是容器类的基类。这三个类的代码如下：
```java
package orc.common
{
    import flash.display.DisplayObject;
    import flash.display.Sprite;
    import flash.display.StageAlign;
    import flash.display.StageScaleMode;
    import flash.events.Event;
    
    import mx.binding.utils.BindingUtils;
    import mx.core.Application;
    import mx.events.PropertyChangeEvent;
    
    [DefaultProperty( "children" )]
    [Bindable]
    [Event(name="inited", type="flash.events.Event")] 
    public class Application extends Sprite
    {
        protected var _width:Number = 0;
        protected var _height:Number = 0;
        
        public var fillMode:Boolean = true;
        
        private var inited:Boolean = false;
        
        public static var instance : Application = null;
        
        public function Application()
        {
            super();
            x = 0;
            y = 0;
            instance = this;
            if(stage != null)
            {
                stage.showDefaultContextMenu = false;
                stage.align = StageAlign.TOP_LEFT;
                stage.scaleMode = StageScaleMode.NO_SCALE;
            }
            addEventListener(Event.ENTER_FRAME, onInvalidate);
        }
        
        private var _children:Vector.<DisplayObject>;
        private var childrenChanged:Boolean = false;
        
        public function get children():Vector.<DisplayObject>
        {
            return _children;
        }
        
        public function set children( value:Vector.<DisplayObject> ):void
        {
            if ( _children != value )
            {
                _children = value;
                childrenChanged = true;
                invalidate();
            }
        }
        
        protected function invalidate():void
        {
            removeEventListener(Event.ENTER_FRAME, onInvalidate);
            addEventListener(Event.ENTER_FRAME, onInvalidate);
        }
        
        protected function onStageResize(event:Event):void
        {
            if(fillMode == true)
            {
                if(this.width != stage.stageWidth) this.width = stage.stageWidth;
                if(this.height != stage.stageHeight) this.height = stage.stageHeight;
            }
        }
        
        protected function onInvalidate(event:Event) : void
        {
            if(fillMode == true && stage.stageWidth > 0)
            {
                if(this.width != stage.stageWidth) this.width = stage.stageWidth;
                if(this.height != stage.stageHeight) this.height = stage.stageHeight;
            }
            
            if(stage.hasEventListener(Event.RESIZE) == true)
            {
                stage.removeEventListener(Event.RESIZE, onStageResize);
            }
            
            stage.addEventListener(Event.RESIZE, onStageResize);
            
            if ( childrenChanged )
            {
                while ( numChildren > 0 )
                {
                    removeChildAt( 0 );
                }
                
                for each ( var child:DisplayObject in children )
                {
                    addChild( child );
                }
                
                childrenChanged = false;
            }
            
            removeEventListener(Event.ENTER_FRAME, onInvalidate);
            
            if(inited == false)
            {
                inited = true;
                this.dispatchEvent(new Event("inited"));
            }
        }
        
        override public function set width(w:Number):void
        {
            _width = w;
            invalidate();
            dispatchEvent(new Event(Event.RESIZE));
        }


        override public function get width():Number
        {
            return _width;
        }
        
        override public function set height(h:Number):void
        {
            _height = h;
            invalidate();
            dispatchEvent(new Event(Event.RESIZE));
        }


        override public function get height():Number
        {
            return _height;
        }
        
        override public function set x(value:Number):void
        {
            super.x = Math.round(value);
        }
        
        override public function set y(value:Number):void
        {
            super.y = Math.round(value);
        }
        
        public function removeAllChildren():void
        {
            while(this.numChildren > 0)
            {
                this.removeChildAt(0);
            }
            
            if(this._children != null)
            {
                this._children = null;
                childrenChanged = true;
            }
        }
    }
}


package orc.common
{
    import flash.display.DisplayObjectContainer;
    import flash.display.Sprite;
    import flash.display.Stage;
    import flash.display.StageAlign;
    import flash.display.StageScaleMode;
    import flash.events.Event;
    import flash.events.MouseEvent;
    import flash.filters.DropShadowFilter;
    
    import orc.containers.PopUpCanvas;
    import orc.utils.CallLaterHelper;
    import orc.utils.MouseHelper;
    
    [Bindable]
    [Event(name="resize", type="flash.events.Event")] 
    [Event(name="mouseStick",type="flash.events.Event")]
    [Event(name="closed",type="flash.events.Event")]
    [Event(name="draw",type="flash.events.Event")]
    public class BaseComponent extends Sprite
    {
        protected var _width:Number = 0;
        protected var _height:Number = 0;
        protected var _tag:int = -1;
        protected var _enabled:Boolean = true;
        
        public static const DRAW:String = "draw";
        
        public var maskCanvas:PopUpCanvas;


        private var _mouseHelper:MouseHelper;


        private function get mouseHelper():MouseHelper
        {
            if(_mouseHelper == null) _mouseHelper = new MouseHelper();
            return _mouseHelper;
        }
        
        public function get mouseStickIntervalMiniSeconds():uint
        {
            return mouseHelper.stickHelper.intervalMiniSeconds;
        }


        public function set mouseStickIntervalMiniSeconds(value:uint):void
        {
            mouseHelper.stickHelper.intervalMiniSeconds = value;
        }
        
        private var _enableMouseStick:Boolean = false;


        public function get enableMouseStick():Boolean
        {
            return _enableMouseStick;
        }


        public function set enableMouseStick(value:Boolean):void
        {
            _enableMouseStick = value;
            if(value == true)
            {
                var self:BaseComponent = this;
                mouseHelper.stickHelper.bind(this);
                mouseHelper.stickHelper.callback = 
                    function():void
                    {
                        self.dispatchEvent(new Event("mouseStick"));
                    };
            }
            else
            {
                mouseHelper.stickHelper.unbind();
            }
        }
        
        public function show(x:Number = NaN, y:Number = NaN):void
        {
            var pop:PopUpCanvas = new PopUpCanvas();
            pop.show();
            pop.setContent(this,x,y);
        }
        
        public function showDialog(x:Number = NaN, y:Number = NaN):void
        {
            var pop:PopUpCanvas = new PopUpCanvas();
            pop.showDialog();    
            pop.setContent(this,x,y);
        }
                
        public function BaseComponent(parent:DisplayObjectContainer = null, xpos:Number = 0, ypos:Number =  0)
        {
            move(xpos, ypos);
            if(parent != null)
            {
                parent.addChild(this);
            }
            init();
        }
        
        protected function init():void
        {
            addChildren();
            invalidate();
        }
        
        protected function addChildren():void
        {
        }
        
        protected function invalidate():void
        {
            removeEventListener(Event.ENTER_FRAME, onInvalidate);
            addEventListener(Event.ENTER_FRAME, onInvalidate);
        }
        
        protected function getShadow(dist:Number, knockout:Boolean = false):DropShadowFilter
        {
            return new DropShadowFilter(dist, 45, Style.DROPSHADOW, 1, dist, dist, .3, 1, knockout);
        }
        
        public static function initStage(stage:Stage):void
        {
            stage.align = StageAlign.TOP_LEFT;
            stage.scaleMode = StageScaleMode.NO_SCALE;
        }
        
        public function move(xpos:Number, ypos:Number):void
        {
            x = Math.round(xpos);
            y = Math.round(ypos);
        }
        
        public function setSize(w:Number, h:Number):void
        {
            _width = w;
            _height = h;
            invalidate();
        }
        
        public function draw():void
        {
            dispatchEvent(new Event(BaseComponent.DRAW));
        }
        
        protected function onInvalidate(event:Event):void
        {
            removeEventListener(Event.ENTER_FRAME, onInvalidate);
            draw();
        }
        
        override public function set width(w:Number):void
        {
            _width = w;
            invalidate();
            dispatchEvent(new Event(Event.RESIZE));
        }
        
        override public function get width():Number
        {
            return _width;
        }
        
        override public function set height(h:Number):void
        {
            _height = h;
            invalidate();
            dispatchEvent(new Event(Event.RESIZE));
        }
        
        override public function get height():Number
        {
            return _height;
        }
        
        public function set tag(value:int):void
        {
            _tag = value;
        }
        
        public function get tag():int
        {
            return _tag;
        }
        
        public function set enabled(value:Boolean):void
        {
            _enabled = value;
            mouseEnabled = mouseChildren = _enabled;
            tabEnabled = value;
            alpha = _enabled ? 1.0 : 0.5;
        }


        public function get enabled():Boolean
        {
            return _enabled;
        }
        
        public function close():void
        {
            if(this.parent != null)
            {
                this.parent.removeChild(this);
            }
            
            if(this.maskCanvas != null)
            {
                this.maskCanvas.close();
            }
            this.dispatchEvent(new Event("closed"));
        }
        
        public function callLater(callback:Function):void
        {
            new CallLaterHelper(this.stage,callback);
        }
    }
}


package orc.common
{
    import flash.display.DisplayObject;
    import flash.display.DisplayObjectContainer;
    import flash.display.Shape;
    import flash.events.Event;
    import flash.geom.Point;
    
    [DefaultProperty( "children" )]
    [Bindable]
    [Event(name="inited", type="flash.events.Event")] 
    public class BaseContainer extends BaseComponent
    {
        private var _children:Vector.<DisplayObject>;
        private var childrenChanged:Boolean = false;
        
        protected var inited:Boolean = false;
        
        protected function s(key:String,defaultValue:String = null):String
        {
            return l.i.getString(key,defaultValue);
        }
        
        /**
         * Array of DisplayObject instances to be added as children
         */
        public function get children():Vector.<DisplayObject>
        {
            return this._children;
        }

        public function set children( value:Vector.<DisplayObject> ):void
        {
            if ( _children != value )
            {
                if(_children != null)
                {
                    for each(var item:DisplayObject in value)
                    {
                        _children.push(item);
                    }
                }
                else
                {
                    _children = value;
                }
                childrenChanged = true;
                invalidate();
            }
        }
        
        public function BaseContainer(parent:DisplayObjectContainer = null, xpos:Number = 0, ypos:Number =  0)
        {
            super(parent, xpos, ypos);
        }
        
        override protected function onInvalidate(event:Event) : void
        {
            if ( childrenChanged )
            {
                while ( numChildren > 0 )
                {
                    removeChildAt( 0 );
                }
                
                if(children != null)
                {
                    for each ( var child:DisplayObject in children )
                    {
                        addChild( child );
                    }
                }
                
                childrenChanged = false;
            }
            
            if(this.mask != null)
            {
                if(this.contains(this.mask))
                {
                    this.removeChild(this.mask);
                }
            }
            
            super.onInvalidate(event);
            
            if(inited == false)
            {
                inited = true;
                this.dispatchEvent(new Event("inited"));
            }
        }
        
        public function removeAllChildren():void
        {
            while(this.numChildren > 0)
            {
                this.removeChildAt(0);
            }
            
            if(this._children != null)
            {
                this._children = null;
                childrenChanged = true;
            }
        }
        
        public function setCenter(obj:DisplayObject):void
        {
            obj.x = 0.5 * (this.width - obj.width);
            obj.y = 0.5 * (this.height - obj.height);
        }
    }
}



　　几个Helper类代码：


package orc.utils
{
    import flash.display.Stage;
    import flash.events.Event;


    public class CallLaterHelper
    {
        public function CallLaterHelper(stage:Stage, callback:Function)
        {
            this.callback = callback;
            this.stage = stage;


            stage.addEventListener(Event.ENTER_FRAME, onStageEnterFrame);
        }
        
        private var stage:Stage;
        
        private var callback:Function;
        
        private function onStageEnterFrame(event:Event):void
        {
            stage.removeEventListener(Event.ENTER_FRAME, onStageEnterFrame);
            
            if(callback != null)
            {
                callback();
            }
        }
    }
}


package orc.utils
{
    public class MouseHelper
    {
        private var _stickHelper:MouseStickHelper;


        public function get stickHelper():MouseStickHelper
        {
            if(_stickHelper == null) _stickHelper = new MouseStickHelper();
            return _stickHelper;
        }
    }
}


package orc.utils
{
    import flash.display.Sprite;
    import flash.events.MouseEvent;
    import flash.events.TimerEvent;
    import flash.utils.Timer;


    public class MouseStickHelper
    {
        private var target:Sprite;
        private var timer:Timer = new Timer(intervalMiniSeconds);
        private var active:Boolean = false;
        private var mouseEvent:MouseEvent;
        
        private var _intervalMiniSeconds:uint = 100;


        public function get intervalMiniSeconds():uint
        {
            return _intervalMiniSeconds;
        }


        public function set intervalMiniSeconds(value:uint):void
        {
            _intervalMiniSeconds = value;
            timer.delay = value;
        }
        
        public var callback:Function = null;
        
        public function bind(obj:Sprite):void
        {
            unbind();
            target = obj;
            if(target != null)
            {
                target.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
                target.addEventListener(MouseEvent.MOUSE_OUT, onMouseOut);
                target.addEventListener(MouseEvent.MOUSE_UP, onMouseUp);
                target.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
            }
        }
        
        public function unbind():void
        {
            if(target != null)
            {
                target.removeEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);
                target.removeEventListener(MouseEvent.MOUSE_OUT, onMouseOut);
                target.removeEventListener(MouseEvent.MOUSE_UP, onMouseUp);
                target.removeEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
                target = null;
                reset();
            }
        }
        
        private function onMouseDown(event:MouseEvent):void
        {
            active = true;
            timer.stop();
            if(timer.hasEventListener(TimerEvent.TIMER) == false)
            {
                timer.addEventListener(TimerEvent.TIMER, 
                    function(e:*):void
                    {
                        fireEvent();
                    }
                );
            }
            timer.start();
            fireEvent();
        }
        
        private function fireEvent():void
        {
            if(this.callback != null)
            {
                this.callback();
            }
        }
        
        private function onMouseMove(event:MouseEvent):void
        {
            if(active == false) return;
        }


        private function onMouseOut(event:MouseEvent):void
        {
            reset();
        }


        private function onMouseUp(event:MouseEvent):void
        {
            reset();
        }


        private function reset():void
        {
            active = false;
            timer.stop();
        }
    }
}
```


　　下面开始搭积木。先是Shape。只要有背景的地方，都有Shape。下面是Shape的基类：

```java
package orc.shapes
{
    import flash.display.BitmapData;
    
    import orc.common.BaseComponent;


    public class BaseShape extends BaseComponent
    {
        private var _color:uint = 0xFFFFFF;
        
        public function get color():uint
        {
            return _color;
        }
        
        public function set color(value:uint):void
        {
            if(_color == value) return;
            
            _color = value;
            this.invalidate();
        }
        
        private var _fillAlpha:Number = 1;
        
        public function get fillAlpha():Number
        {
            return _fillAlpha;
        }
        
        public function set fillAlpha(value:Number):void
        {
            _fillAlpha = value;
            this.invalidate();
        }


        private var _texture:BitmapData;


        public function get texture():BitmapData
        {
            return _texture;
        }


        public function set texture(value:BitmapData):void
        {
            _texture = value;
            this.invalidate();
        }
        
        private var _borderAlpha:Number = 1;
        
        
        public function get borderAlpha():Number
        {
            return _borderAlpha;
        }
        
        public function set borderAlpha(value:Number):void
        {
            _borderAlpha = value;
            this.invalidate();
        }
        
        private var _borderColor:uint;
        
        public function get borderColor():uint
        {
            return _borderColor;
        }
        
        public function set borderColor(value:uint):void
        {
            _borderColor = value;
            this.invalidate();
        }
        
        private var _borderThickness:Number = NaN;
        
        public function get borderThickness():Number
        {
            return _borderThickness;
        }
        
        public function set borderThickness(value:Number):void
        {
            _borderThickness = value;
            this.invalidate();
        }
        
        private var _descriptor:Descriptor;
        
        public function get descriptor():Descriptor
        {
            return _descriptor;
        }
        
        public function set descriptor(value:Descriptor):void
        {
            _descriptor = value;
            if(_descriptor != null)
            {
                _descriptor.resize(this);
            }
        }
    }
}
```

　　BaseShape 继承了BaseComponent的x,y,width,height等属性，另外提供了填充色，填充透明度，纹理，边界色，边界透明度，边界厚度等属性。而又因为有些形状，比如圆，不方便用x,y,width,height等描述，更方便用圆心和半径描述，因此又提供了descriptor的属性。如，CircularDescriptor： 

```java
package orc.shapes
{
    public class Descriptor
    {
        public function resize(shape:BaseShape):void
        {
            
        }
    }
}


package orc.shapes
{
    public class CircularDescriptor extends Descriptor
    {
        public var centerX:Number;
        public var centerY:Number;
        public var radius:Number;
        
        public function CircularDescriptor(centerX:Number,centerY:Number,radius:Number):void
        {
            this.centerX = centerX;
            this.centerY = centerY;
            this.radius = radius;
        }
        
        public override function resize(shape:BaseShape):void
        {
            shape.x = centerX - radius;
            shape.y = centerY - radius;
            shape.width = radius * 2;
            shape.height = radius * 2;
        }
    }
}
```


　　接着是矩形控件： 
```java
package orc.shapes
{
    import flash.display.Graphics;


    public class Rectangle extends BaseShape
    {
        private var _corner:Number = NaN;


        public function get corner():Number
        {
            return _corner;
        }


        public function set corner(value:Number):void
        {
            _corner = value;
            this.invalidate();
        }


        private var _corners:Array = null;
        
        public function get corners():Array
        {
            return _corners;
        }


        public function set corners(value:Array):void
        {
            _corners = value;
            this.invalidate();
        }


        public override function draw():void
        {
            var g:Graphics = this.graphics;
            g.clear();
            if(width > 0 && height > 0)
            {
                var c0:Number = corner;
                var c1:Number = corner;
                var c2:Number = corner;
                var c3:Number = corner;
                
                var c:Array = this.corners;
                if(c != null && c.length == 4)
                {
                    c0 = Number(c[0]);
                    c1 = Number(c[1]);
                    c2 = Number(c[2]);
                    c3 = Number(c[3]);
                }
                
                if(isNaN(c0)) c0 = 0;
                if(isNaN(c1)) c1 = 0;
                if(isNaN(c2)) c2 = 0;
                if(isNaN(c3)) c3 = 0;
                
                if(isNaN(borderThickness) == false && borderThickness > 0)
                {
                    g.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha,true);
                }
                if(this.texture)
                {
                    g.beginBitmapFill(this.texture);                    
                }
                else
                {
                    g.beginFill(color, this.fillAlpha);
                }
                if(c0 == 0 && c1 == 0 && c2 == 0 && c3 == 0)
                {
                    g.drawRect(0,0,width,height);
                }
                else
                {
                    g.drawRoundRectComplex(0,0,width,height,c0,c1,c2,c3);
                }
                g.endFill();
            }
        }
    }
}
```


　　这个矩形控件可以设置圆角。有了这个控件，各种各样的背景图就都可以实现了：有圆角的、没圆角的、有纹理的、有边界的，等等。
　　椭圆/圆也经常用，写一个：
　　
```java
package orc.shapes
{
    import flash.display.Graphics;
    
    import orc.common.BaseComponent;


    public class Ellipse extends BaseShape
    {
        public override function draw():void
        {
            var g:Graphics = this.graphics;
            g.clear();
            if(width > 0 && height > 0)
            {
                if(isNaN(borderThickness) == false && borderThickness > 0)
                {
                    g.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha);
                }
                
                if(this.texture)
                {
                    g.beginBitmapFill(this.texture);                    
                }
                else
                {
                    g.beginFill(color, this.fillAlpha);
                }
                g.drawEllipse(0,0,width,height);
                g.endFill();
            }
            
            super.draw();
        }
    }
}
```


　　下面，我们建立一个简单的Canvas类，这个Canvas类可以设置背景，可以设置边界（背景和边界是用上面的Rectangle 类实现的。

```xml
<?xml version="1.0" encoding="utf-8"?>
<common:BaseContainer xmlns:fx="[http://ns.adobe.com/mxml/2009](http://ns.adobe.com/mxml/2009)"
                      xmlns:mx="library://ns.adobe.com/flex/mx"
                      xmlns:common="orc.common.*"
                      width="400" height="300"
                      xmlns:controls="orc.controls.*"
                      xmlns:shapes="orc.shapes.*"
                      >
    <fx:Script>
        <![CDATA[
            [Bindable] 
            public var bgColor:uint = 0xFFFFFF;
            
            [Bindable]
            public var bgCorner:Number = NaN;
            
            [Bindable]
            public var bgCorners:Array = null;
            
            [Bindable]
            public var bgAlpha:Number = 1;
            
            [Bindable]
            public var bgEnabled:Boolean = true;
            
            [Bindable]
            public var bgBorderThickness:Number = NaN;
            
            [Bindable]
            public var bgBorderColor:Number = 0xFFFFFF;
            
            [Bindable]
            public var bgFillAlpha:Number = 1;
            
            [Bindable]
            public var bgBorderAlpha:Number = 1;
            
        ]]>
    </fx:Script>
    <shapes:Rectangle id="background" width="{width}" height="{height}"
                       corner="{bgCorner}" corners="{bgCorners}"
                       color="{bgColor}"
                       alpha="{bgEnabled?bgAlpha:bgAlpha*0.3}"
                       borderColor="{bgBorderColor}"
                       borderThickness="{bgBorderThickness}"
                       fillAlpha="{bgFillAlpha}" borderAlpha="{bgBorderAlpha}"
                       />
</common:BaseContainer>
```


　　一个Canvas就是这么简单！下面，建立Image控件，这个Image支持九宫格（如果不知道九宫格，请Google之）：

```java
package orc.controls
{
    import flash.display.AVM1Movie;
    import flash.display.Bitmap;
    import flash.display.BitmapData;
    import flash.display.DisplayObject;
    import flash.display.Loader;
    import flash.display.MovieClip;
    import flash.events.Event;
    import flash.geom.Matrix;
    import flash.geom.Rectangle;
    import flash.net.URLRequest;
    
    import orc.common.Avm1Loader;
    import orc.common.BaseComponent;
    import orc.common.ScaleBitmap;
    
    [Event(name="complete",type="flash.events.Event")]
    public class Image extends BaseComponent
    {
        public static const MODE_9GRID:String = "9grid";
        
        private var _source:*;


        public function get source():*
        {
            return _source;
        }


        [Bindable]
        public function set source(value:*):void
        {
            _source = value;
            this.onInvalidate(null);
        }
        
        [Bindable]
        public var sourceScale9Grid:Rectangle;
        
        public var mode:String = MODE_9GRID;
        
        public function Image():void
        {
            super();
        }
        
        public override function draw():void
        {
            super.draw();
            if(source)
            {
                if(source is BitmapData)
                {
                    drawBitmapData(source);
                }
                else if(source is Bitmap)
                {
                    drawBitmapData(Bitmap(source).bitmapData);
                }
                else if(source is Class)
                {
                    var bmp:Bitmap = new source() as Bitmap;
                    if(bmp != null)
                    {
                        drawBitmapData(bmp.bitmapData);
                    }
                }
                else if(source is String)
                {
                    if(_loader != null)
                    {
                        _loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,loadCompleted);
                    }
                    
                    _loader = new Loader();
                    _loader.contentLoaderInfo.addEventListener(Event.COMPLETE,loadCompleted);
                    _loader.load(new URLRequest(source));
                }
            }
            else
            {
                clear();
            }
        }
        
        private function loadCompleted(e:Event):void
        {
            clear();
            
            var d:DisplayObject = _loader.content;
            var child:DisplayObject = d;
            if(d is AVM1Movie)
            {
                var bmpData:BitmapData = new BitmapData(d.width,d.height,true,0);
                bmpData.draw(d);
                child = new Bitmap(bmpData,"auto",true);
            }
            else if(d is Bitmap)
            {
                Bitmap(d).smoothing = true;
            }
            
            if(this.width > 0 && this.height > 0)
            {
                var xx:Number = this.width / child.width;
                var yy:Number = this.height / child.height;
                var scale:Number = Math.min(xx,yy);
                child.scaleX = scale;
                child.scaleY = scale;
            }
            else
            {
                this._width = child.width;
                this._height = child.height;
                this.dispatchEvent(new Event(Event.RESIZE));
            }
            this._bgBitmap = child;
            addChild(child);
            this.dispatchEvent(new Event(Event.COMPLETE));
        }
        
        private var _loader:Loader;
        
        private var _bgBitmap:DisplayObject = null;
        
        private function clear():void
        {
            if(_bgBitmap != null)
            {
                this.removeChild(_bgBitmap);
                _bgBitmap = null;
            }
        }
        
        protected function drawBitmapData(bmpData:BitmapData):void
        {
            clear();
            
            if(bmpData == null) return;
            
            if(this.width == 0 || this.height == 0)
            {
                this._width = bmpData.width;
                this._height = bmpData.height;
                this.dispatchEvent(new Event(Event.RESIZE));
            }
            
            var sb:ScaleBitmap = new ScaleBitmap(bmpData,"auto",true);
            sb.scale9Grid = this.sourceScale9Grid;
            sb.setSize(this.width,this.height);
            _bgBitmap = sb;
            this.addChild(sb);
            this.dispatchEvent(new Event(Event.COMPLETE));
        }
        
        public function getBitmap():Bitmap
        {
            if(this._bgBitmap == null) return null;
            var bmpData:BitmapData = new BitmapData(this._bgBitmap.width,this._bgBitmap.height, true, 0);
            bmpData.draw(this._bgBitmap, new Matrix(this._bgBitmap.scaleX,0,0,this._bgBitmap.scaleY));
            var bmp:Bitmap = new Bitmap(bmpData);
            return bmp;
        }
    }
}
```


　　那么，我们如何让Canvas或BaseContainer中显示背景图呢？简单，在里面放个Image控件即可，比如，这是我写的ImageButton控件：

```xml
<common:BaseContainer xmlns:fx="[http://ns.adobe.com/mxml/2009](http://ns.adobe.com/mxml/2009)"
                   xmlns:mx="library://ns.adobe.com/flex/mx"
                   xmlns:oc="orc.controls.*"
                   xmlns:common="orc.common.*"
                   buttonMode="true" useHandCursor="true"
                   mouseChildren="{enable}" mouseEnabled="{enable}"
                   mouseOver="{if(enable == true) alpha=0.6;}"
                   mouseOut="{if(enable == true) alpha=1;}"
                   >
    <fx:Script>
        <![CDATA[
            [Bindable]
            public var source:*;
            
            public function get enable():Boolean
            {
                return img ? img.enabled : true;
            }


            [Bindable]
            public function set enable(value:Boolean):void
            {
                img.enabled = value;
                if(value == true) alpha = 1;
            }
        ]]>
    </fx:Script>
    <oc:Image id="img" source="{source}" mouseChildren="false" mouseEnabled="false" />
</common:BaseContainer>
```

　　Label控件离不了，恩，就在网上的一份代码基础上写个Label控件：

```java
package orc.controls
{
    import flash.display.DisplayObjectContainer;
    import flash.events.Event;
    import flash.text.TextField;
    import flash.text.TextFieldAutoSize;
    import flash.text.TextFormat;
    
    import orc.common.BaseComponent;
    import orc.common.Style;
    
    [Event(name="resize", type="flash.events.Event")]
    public class Label extends BaseComponent
    {
        protected var _autoSize:Boolean = false;
        protected var _text:String = "";
        protected var _tf:TextField;
        
        public var fontName:String = Style.fontName;
        public var fontSize:Number = Style.fontSize;
        public var fontColor:uint = 0x000000;
        public var align:String = "left";
        public var bold:Boolean = false;
        
        public function Label(parent:DisplayObjectContainer = null, xpos:Number = 0, ypos:Number =  0, text:String = "")
        {
            this.text = text;
            super(parent, xpos, ypos);
        }
        
        override protected function init():void
        {
            super.init();
            mouseEnabled = false;
            mouseChildren = false;
        }
        
        override protected function addChildren():void
        {
            _height = 18;
            _tf = new TextField();
            _tf.height = _height;
            _tf.selectable = false;
            _tf.mouseEnabled = false;
            _tf.text = _text;            
            addChild(_tf);
            draw();
        }
        
        override public function draw():void
        {
            super.draw();
            var f:TextFormat = new TextFormat(fontName,fontSize,fontColor);
            f.align = this.align;
            f.bold = this.bold;
            _tf.defaultTextFormat = f;
            _tf.text = _text;
            if(_autoSize)
            {
                _tf.autoSize = TextFieldAutoSize.LEFT;
                _width = _tf.width;
                dispatchEvent(new Event(Event.RESIZE));
            }
            else
            {
                _tf.autoSize = TextFieldAutoSize.NONE;
                _tf.width = _width;
            }
            _height = _tf.height = 18;
        }
        
        public function set text(t:String):void
        {
            _text = t;
            if(_text == null) _text = "";
            invalidate();
        }
        
        public function get text():String
        {
            return _text;
        }
        
        public function set autoSize(b:Boolean):void
        {
            _autoSize = b;
        }
        
        public function get autoSize():Boolean
        {
            return _autoSize;
        }
        
        public function get textField():TextField
        {
            return _tf;
        }
    }
}
```
　　接下来Button控件呼之欲出：

```xml
<containers:Canvas xmlns:fx="[http://ns.adobe.com/mxml/2009](http://ns.adobe.com/mxml/2009)"
                   xmlns:mx="library://ns.adobe.com/flex/mx"
                   xmlns:common="orc.common.*"
                   xmlns:controls="controls.*"
                   xmlns:oc="orc.controls.*"
                   xmlns:containers="orc.containers.*"
                   width="120" height="24"
                   bgColor="{isMouseOver?mouseOverColor:defaultColor}"
                   bgCorner="6"
                   buttonMode="true" useHandCursor="true"
                   mouseOver="{isMouseOver = true}"
                   mouseOut="{isMouseOver = false}"
                   >
    <fx:Script>
        <![CDATA[
            [Bindable]
            public var label:String = "";
            
            [Bindable]
            public var labelHeight:Number = 20;
            
            [Bindable]
            public var defaultColor:uint = 0xCCCCCC;
            
            [Bindable]
            public var mouseOverColor:uint = 0xDDDDDD;
            
            [Bindable]
            public var isMouseOver:Boolean = false;
        ]]>
    </fx:Script>
    <oc:Label id="lbLabel" text="{label}" width="{width}" y="{0.5*(height-labelHeight)}"
              mouseEnabled="false" height="{labelHeight}" fontSize="12" align="center"
              />
</containers:Canvas>
```


进度条Progress就太容易了：

```xml
<?xml version="1.0" encoding="utf-8"?>
<containers:Canvas xmlns:fx="[http://ns.adobe.com/mxml/2009](http://ns.adobe.com/mxml/2009)"
                   xmlns:mx="library://ns.adobe.com/flex/mx"
                   xmlns:common="orc.common.*"
                   xmlns:controls="orc.controls.*"
                   xmlns:containers="orc.containers.*"
                   xmlns:shapes="orc.shapes.*"
                   bgBorderThickness="1" bgColor="0xFFFFFF" bgBorderColor="0x333333"
                   width="200" height="20"
                   >
    <fx:Script>
        <![CDATA[
            [Bindable]
            public var percent:Number = 0;
            
            [Bindable]
            public var fillColor:uint = 0x0000FF;
            
            private function getWidth(val:Number):Number
            {
                var ww:Number = this.width - 2;
                return ww * val;
            }
        ]]>
    </fx:Script>
    <shapes:Rectangle x="1" y="1" color="{fillColor}" height="{height-2}" width="{getWidth(percent)}" />
</containers:Canvas>
```


　　定位？容易！有数据绑定，想让它在哪里就在哪里，如：

```
x="{0.5*width-borderThickness*0.5}" y="{-handleLength}"
```

带图标的按钮：

![极客玩家大白-ComboButton](https://cdn.jsdelivr.net/gh/yanglr/images/combo-button.jpg "极客玩家大白")

```xml
<?xml version="1.0" encoding="utf-8"?>
<containers:Canvas xmlns:fx="[http://ns.adobe.com/mxml/2009](http://ns.adobe.com/mxml/2009)"
           xmlns:mx="library://ns.adobe.com/flex/mx"
           xmlns:containers="orc.containers.*"
           xmlns:controls="orc.controls.*"
           mouseChildren="false"
           bgCorner="5"
           buttonMode="true" useHandCursor="true"
           mouseOver="{alpha=0.9;}"
           mouseOut="{alpha=1;}"
           width="200" height="50"
           >
    <fx:Script>
        <![CDATA[
            [Bindable]
            public var source:Class;
            
            [Bindable]
            public var label:String;
        ]]>
    </fx:Script>
    <controls:Image x="30" y="10" source="{source}" />
    <controls:Label x="70" y="18"
                    text="{label}"
                    fontSize="12"
                    width="120"
                    />
</containers:Canvas>
```


　　HSlider: 

![极客玩家大白-Slider](https://cdn.jsdelivr.net/gh/yanglr/images/slider.jpg "极客玩家大白")


```xml
<?xml version="1.0" encoding="utf-8"?>
<containers:Canvas xmlns:fx="[http://ns.adobe.com/mxml/2009](http://ns.adobe.com/mxml/2009)"
                   xmlns:mx="library://ns.adobe.com/flex/mx"
                   xmlns:common="orc.common.*"
                   xmlns:controls="controls.*"
                   xmlns:containers="orc.containers.*"
                   xmlns:shapes="orc.shapes.*"
                   width="264" height="22"
                   bgAlpha="0"
                   inited="onInited()"
                   >
    <fx:Metadata>
        [Event(name="drag",type="flash.events.Event")]
    </fx:Metadata>
    <fx:Script>
        <![CDATA[
            import orc.events.MoveEvent;
            import orc.utils.DragHelper;
            
            [Bindable]
            public var maximum:Number = 3;
            [Bindable]
            public var minimum:Number = 0;
            [Bindable]
            public var value:Number = minimum;
            
            private var dragHelper:DragHelper = new DragHelper();
            
            private function get minX():Number
            {
                return 0;
            }
            
            private function get maxX():Number
            {
                return this.width - btnDrag.width + 1;
            }
            
            private function checkX(val:Number):Number
            {
                val = Math.max(val,minX);
                val = Math.min(val,maxX);
                return val;
            }
            
            private function checkValue(val:Number):Number
            {
                val = Math.max(val,minimum);
                val = Math.min(val,maximum);
                return val;
            }
            
            private function getX(val:Number, min:Number = NaN, max:Number = NaN):Number
            {
                val = this.checkValue(val);
                return minX + (maxX - minX) * (val - minimum ) / (maximum - minimum);
            }
            
            private function onInited():void
            {
                dragHelper.bind(btnDrag, this);
                dragHelper.addEventListener(MoveEvent.MOVING, onDrag);
            }
            
            private function onDrag(event:MoveEvent):void
            {
                var xx:Number = checkX(event.xOffSet/this.scaleX + btnDrag.x);
                dragToX(xx);
            }
            
            private function dragToX(val:Number):void
            {
                this.value = convertX2Value(val);
                this.dispatchEvent(new Event("drag"));                
            }
            
            private function convertX2Value(x:Number):Number
            {
                var val:Number = minimum + (maximum - minimum) * (x - minX ) / (maxX - minX);
                return checkValue(val);
            }
            
            private function onMouseStick(e:Event):void
            {
                var step:Number = 5;
                var xx:Number = this.btnDrag.x;
                if(this.btnDrag.mouseX > 0)
                {
                    xx += step;
                }
                else
                {
                    xx -= step;
                }
                
                dragToX(xx);
            }
        ]]>
    </fx:Script>
    <controls:ImageButton y="1.4"
                          width="264" height="22"
                          enableMouseStick="true"
                          mouseStick="onMouseStick(event)"
                          mouseStickIntervalMiniSeconds="40"
                          source="@Embed(source='assets/hsliderBg.png')"
                          />
    <controls:ImageButton source="@Embed(source='assets/slider.png')"
                          id="btnDrag"  x="{getX(value, minimum, maximum)}"
                          width="25" height="25" />
</containers:Canvas>
```


　　图像拉伸、旋转、缩放、删除的控制框控件复杂一点，400多行，代码贴时出错了，就不贴了，效果图：

![极客玩家大白-resize box](https://cdn.jsdelivr.net/gh/yanglr/images/resize-box.jpg "极客玩家大白")

　　当然，滚动条啥的控件就复杂一点，不想写可以就拿Flash里自带的包装一下，照样用。
　　然后是动画，动画也很容易，下面是让一个界面慢慢的变小的代码：
```java
            [Bindable]
            public var centerX:Number = 0;
            
            [Bindable]
            public var centerY:Number = 0;
            
            [Bindable]
            public var targetWinth:Number = 0;
            
            [Bindable]
            public var targetHeight:Number = 0;
            
            private var _percent:Number = 0;
            
            public function get percent():Number
            {
                return _percent;
            }
            
            [Bindable]
            public function set percent(value:Number):void
            {
                if(value == 1) cvs.visible = true;
                else if(cvs.visible == true) cvs.visible = false;
                
                _percent = value;
                this.width = targetWinth * value;
                this.height = targetHeight * value;
                this.callLater(
                    function():void
                    {
                        x = centerX - width * 0.5;
                        y = centerY - height * 0.5;
                    });
            }
            
            public function min():void
            {
                TweenLite.to(this,0.5,{percent:0});
            }
```

　　看看我做的一个项目的整体效果图，这些界面大部分都是从Draw API一步步绘制的：

![极客玩家大白-大头贴](https://cdn.jsdelivr.net/gh/yanglr/images/datoutie.jpg "极客玩家大白")

 　 as3有个叫haXe的兄弟语言，haXe写的代码可以在Flash平台运行，可以在js环境运行，铺平了向html5的过渡之途。
下面，回答前面提出的四个问题：我会哪些？我学了哪些？我能做什么？做这些我相对于别人有哪些优势？
我会哪些？我学了哪些？
Flash CS系列工具会吗？不会！
Flex会吗，会一点点而已。
还就只懂几个API和数据绑定和几个Flash基本类。其实这就够了。有基本类、有几个API，有数据绑定，组合起来就是非常强大的工具，我们不需要学习多少东西，却可以非常高效率的开发很多应用，且开发的这些应用可以分发到各大平台。不需要学习多少控件，有学习的时间，就够写一个自己的了。自己写的控件没有冗余，性能高，编译后的尺寸小，且修改方便。
我能做什么？
通常的，对特效要求不是特别高的Flash App都能做，这意味着，某些桌面软件，某些Web应用，某些ios应用和某些android应用。额，Html5也算顺便能做，今年顺手用haXe做了个html5的项目。
我相对于别人有哪些优势？
那些用Flash CS开发的，开发效率低，代码可维护性差。那些用Flex开发的，代码尺寸大，程序性能差。俺这样的优势就是Flex般的开发效率和灵活性，Flash般的性能和代码尺寸，且什么都是自己写的，出了问题自己也好弄，不像Flex那样是代码迷宫。
学的少，可做的多，相对别人还有优势，这是不是就是遁去的一呢？要是按照书本学，按照别人的建议学，东西学了一大堆，能做多少还是个问题，能以什么效率做也是个问题，更可怕的是，学完了还不知道自己学习的是什么。
只学一点点，不累！剩下的，交给狗爹度娘吧。
　　注：本文代码只有主要代码，那些不影响阅读的代码就没贴出来，不然太长了。又由于和业务代码在一个项目里，也不方便打包放出。见谅！
