function toggleShowBuyer(e){"Cette structure"==e.val()?(show_buyer_div=e.parent().parent().parent().next(),show_buyer_div.fadeOut()):e.parent().parent().parent().next().fadeIn()}jQuery.fn.toggleShowBuyerOnChange=function(){this.change(function(){"Cette structure"==$(this).val()?(show_buyer_div=$(this).parent().parent().parent().next(),show_buyer_div.fadeOut()):$(this).parent().parent().parent().next().fadeIn()})},$(document).ready(function(){$(".external_show_buyer_radio").toggleShowBuyerOnChange(),$(".external_show_buyer_radio:checked").each(function(){"Cette structure"==$(this).val()&&$(this).parent().parent().parent().next().hide(),$(this).toggleShowBuyerOnChange()})}),$(document).on("nested:fieldAdded",function(e){var t=e.field;t.find(".external_show_buyer_radio").each(function(){show_buyer_radio_input=$(this),show_buyer_radio_input.parent().parent().parent().next().hide(),show_buyer_radio_input.toggleShowBuyerOnChange()})});