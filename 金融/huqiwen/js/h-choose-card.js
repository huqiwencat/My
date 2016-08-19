/**
 * Created by huqiwen on 16/3/29.
 */
$(function () {
    $(".h-choose-card section").click(function () {
        $(".h-is-choose").hide();
        $(this).children(".h-is-choose").show();
    });
});