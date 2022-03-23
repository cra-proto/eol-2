// if you want the banner off, just comment out the file 

var alphaBanner = document.getElementsByTagName('BODY')[0];
alphaBanner.insertAdjacentHTML('afterbegin', '<section class="experimental alpha-top" role="banner"><h2 class="wb-inv">This webpage is alpha and is looking for feedback</h2><div class="container mrgn-tp-sm mrgn-bttm-sm"><small>Provide feedback for this prototype web page</small>&nbsp;&nbsp;<a href="https://craepmd.optimalworkshop.com/questions/b4r456f3/questions/before" class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">Feedback form<span class="wb-inv"> opens in new window</span></a></div></section >');


//Seperate script to null all canada.ca links to a 404 page
//$(document).ready(function(){$("a[href*='canada.ca']").attr("href", "https://cra-proto.github.io/eol/validation/404.html");});
