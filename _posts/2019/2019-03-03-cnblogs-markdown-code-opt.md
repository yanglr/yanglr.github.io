---
title: 改进博客园Markdown显示功能(加代码行号、显示代码所用编程语言)
date: 2019-03-03 11:33:32
tags: [博客园, markdown]
categories:
- 博客园美化
excerpt: 博客园的markdown模式下的代码高亮功能和行号~
---

博客园的markdown模式下的代码高亮功能使用的是`highlight.js`，没有行号和显示相应编程语言的功能，只好自己将其改造了一下(将这两种功能一并实现了)~ 

先看一下效果，再详细介绍方法~
![cnblogs-大白技术控](http://geekplayers.com/assets/images/2019/blog/cnblogs-highlight.png)

## 查看博客园markdown所使用的代码高亮插件
先找到一篇markdown模式下写的文章，然后打开Chrome，依次使用 F12 -> network -> filter ".js"，可知 代码高亮插件是 [highlight.js](https://common.cnblogs.com/highlight/9.12.0/highlight.min.js).
同理可知TinyMCE模式下使用的是[SyntaxHighlighter](https://github.com/syntaxhighlighter/syntaxhighlighter/wiki/Usage)插件.
尝试了很多方法，最后选择了开源的插件 [highlightjs-line-numbers.js](https://github.com/wcoder/highlightjs-line-numbers.js)，其原理是生成一个新的`table`，增加`tr`、 `td`标签, 并设置`border`为`none`。

该插件官方文档中提到的方法为:

```html
<script src="//cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"></script>

<script>
hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();
<script>
```

## 调整markdown的相关css
接着按需要改进一下markdown的样式，将下面内容贴到`页面定制css`一栏即可。

```css
.cnblogs-markdown .hljs {
   border: none !important;
}


#cnblogs_post_body th, #cnblogs_post_body td, .cnblogs-post-body th, .cnblogs-post-body td {
   border: none !important;
   padding: 0;
}

.postCon {
   font-size: 15px;
}

.cnblogs-markdown .hljs, .cnblogs-post-body .hljs {
   font-family: "Consolas",sans-serif !important;
   font-size: 15px! important;
}

.cnblogs-markdown .hljs, .cnblogs-post-body .hljs {
   font-family: "Courier New",sans-serif!important;
   font-size: 15px!important;
   line-height: 1.5!important;
   padding: 5px!important;
}

#cnblogs_post_body table, .cnblogs-post-body table {
   border: none !important;
   border-collapse: collapse;
   word-break: break-word;
}
```

## 实现加代码行号、显示代码所用语言的具体`js`代码
然后在页脚HTML中加入如下`js`代码~
```html
<script>
$(function () {
    if ($(".cnblogs-post-body pre > code").length > 0) setCodeRowWithLang($(".cnblogs-post-body pre"));
    else setCodeRowWithLang($(".cnblogs-markdown pre"));

    /* markdown模式下为代码加入行号, 调用插件highlightjs-line-numbers.js */
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
});

function setCodeRowWithLang(pre) {
    /* var pre = $(".cnblogs-post-body pre");  选中需要处理的代码块, 如果不是首页，选择器为 .cnblogs-markdown pre  */
    if (pre && pre.length) {
        pre.each(function () {
            var item = $(this);
            var lang = item[0].className;  /*  获取高亮的语言，得到js/html/cpp等全小写的语言名，下面进行一个转换  */
            var langMap = {
                "html": "HTML",
                "xml": "XML",
                "svg": "SVG",
                "mathml": "MathML",
                "css": "CSS",
                "clike": "C-like",
                "js": "JavaScript",
                "abap": "ABAP",
                "apacheconf": "Apache Configuration",
                "apl": "APL",
                "arff": "ARFF",
                "asciidoc": "AsciiDoc",
                "adoc": "AsciiDoc",
                "asm6502": "6502 Assembly",
                "aspnet": "ASP.NET (C#)",
                "autohotkey": "AutoHotkey",
                "autoit": "AutoIt",
                "shell": "Bash",
                "basic": "BASIC",
                "csharp": "C#",
                "dotnet": "C#",
                "cpp": "C++",
                "cil": "CIL",
                "csp": "Content-Security-Policy",
                "css-extras": "CSS Extras",
                "django": "Django/Jinja2",
                "jinja2": "Django/Jinja2",
                "dockerfile": "Docker",
                "erb": "ERB",
                "fsharp": "F#",
                "gcode": "G-code",
                "gedcom": "GEDCOM",
                "glsl": "GLSL",
                "gml": "GameMaker Language",
                "gamemakerlanguage": "GameMaker Language",
                "graphql": "GraphQL",
                "hcl": "HCL",
                "http": "HTTP",
                "hpkp": "HTTP Public-Key-Pins",
                "hsts": "HTTP Strict-Transport-Security",
                "ichigojam": "IchigoJam",
                "inform7": "Inform 7",
                "javastacktrace": "Java stack trace",
                "json": "JSON",
                "jsonp": "JSONP",
                "latex": "LaTeX",
                "emacs": "Lisp",
                "elisp": "Lisp",
                "emacs-lisp": "Lisp",
                "lolcode": "LOLCODE",
                "markup-templating": "Markup templating",
                "matlab": "MATLAB",
                "mel": "MEL",
                "n1ql": "N1QL",
                "n4js": "N4JS",
                "n4jsd": "N4JS",
                "nand2tetris-hdl": "Nand To Tetris HDL",
                "nasm": "NASM",
                "nginx": "nginx",
                "nsis": "NSIS",
                "objectivec": "Objective-C",
                "ocaml": "OCaml",
                "opencl": "OpenCL",
                "parigp": "PARI/GP",
                "objectpascal": "Object Pascal",
                "php": "PHP",
                "php-extras": "PHP Extras",
                "plsql": "PL/SQL",
                "powershell": "PowerShell",
                "properties": ".properties",
                "protobuf": "Protocol Buffers",
                "q": "Q (kdb+ database)",
                "jsx": "React JSX",
                "tsx": "React TSX",
                "renpy": "Ren'py",
                "rest": "reST (reStructuredText)",
                "sas": "SAS",
                "sass": "Sass (Sass)",
                "scss": "Sass (Scss)",
                "sql": "SQL",
                "soy": "Soy (Closure Template)",
                "tap": "TAP",
                "toml": "TOML",
                "tt2": "Template Toolkit 2",
                "ts": "TypeScript",
                "vbnet": "VB.Net",
                "vhdl": "VHDL",
                "vim": "vim",
                "visual-basic": "Visual Basic",
                "vb": "Visual Basic",
                "wasm": "WebAssembly",
                "wiki": "Wiki markup",
                "xeoracube": "XeoraCube",
                "xojo": "Xojo (REALbasic)",
                "xquery": "XQuery",
                "yaml": "YAML"
            };

            var displayLangText = "";
            if (lang in langMap) displayLangText = langMap[lang];
            else displayLangText = lang;
            item.find('.hljs')
                .prepend(
                    '<div align="right" top="0px" right="10px" position="relative"><a href="javascript:void(0);"></a> <font class="codeLang"  title="当前Code所用语言">' +
                    displayLangText +
                    '</font></div>');
        });
    };
}
</script>
```
使用 `highlight-line-number.js`的前提是已经include进来`highlight.js`，虽然首页是默认不load `highlight.js`的，但可使用`JQuery`的`getScript`函数去加载之。

上述`js`函数`setCodeRowWithLang()`对文章内容和博客首页都是有效的~

本文**首发**于 本人**博客园**博客: <br/>
<https://www.cnblogs.com/enjoy233/p/10410089.html> .


