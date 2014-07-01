(function(module) {
    "use strict";

    var JotForm = {},
        embed = '<iframe id="JotFormIFrame" onload="window.parent.scrollTo(0,0)" allowtransparency="true" src="http://form.jotformeu.com/form/$1" frameborder="0" style="width:100%; height:918px; border:none;" scrolling="no"></iframe>' +
            '<script type="text/javascript">window.handleIFrameMessage = function(e) {var args = e.data.split(":");var iframe = document.getElementById("JotFormIFrame");if (!iframe)return;switch (args[0]) {case "scrollIntoView":iframe.scrollIntoView();break;case "setHeight":iframe.style.height = args[1] + "px";break;}};if (window.addEventListener) {window.addEventListener("message", handleIFrameMessage, false);} else if (window.attachEvent) {window.attachEvent("onmessage", handleIFrameMessage);}</script>';


    JotForm.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(?:form\.jotformeu\.com)\/form\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = JotForm;
}(module));
