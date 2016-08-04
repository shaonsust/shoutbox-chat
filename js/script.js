
$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name").val();
        var shout = $("#shout").val();
        var date = getDate();
        // var dataString = "name = " + name + "&shout = " + shout + "&date = " + date;

        //validation
        if(name == '' || shout == '')
        {
            alert("Please fill in your name and shout");
        }
        else
        {
            $.ajax({
                type : "post",
                url : "../shoutbox/shoutbox.php",
                data : {name : name, shout : shout, date : date},
                cache : false
                // success : function (html) {
                //     $("#shouts ul").prepend(html);
                // }
            }).done(function (html) {
                $("#shouts ul").prepend(html);
                $("#shout").val('');
            });
        }
        return false;
    });
});

//Format date like mysql date
function getDate()
{
    var date;
    date = new Date();

    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + (date.getUTCDate() + 1)).slice(-2) + '-' +
        ('00' + (date.getUTCHours() + 1)).slice(-2) + '-' +
        ('00' + (date.getUTCMinutes() + 1)).slice(-2) + '-' +
        ('00' + (date.getUTCSeconds() + 1)).slice(-2);
    return date;
}