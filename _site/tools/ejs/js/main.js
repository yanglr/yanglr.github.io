(function () {

    var $result = document.getElementById("result");

    function update () {
        var result = null
          , input = editor.getValue()
          ;

        try {
            result = ejs.render(input)
            $result.parentNode.style.background = "#27ae60";
        } catch (e) {
            result = e.stack;
            $result.parentNode.style.background = "#c0392b";
        }

        if (/html/.test(location.search)) {
            $result.innerHTML = result;
        } else {
            $result.textContent = result;
        }
    }

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/ejs");
    editor.on("change", update);
    editor.setValue(`OK, 我们来写第一段 ejs 代码吧!
-------------------
<%
    var num = 100;
%>
打印定义过的值:
<% if(num > 50) { %>num的值为: <%= num %><% } %>`, -1);
    editor.focus();
})();
