// if you want the banner off, just comment out the file 

var alphaBanner = document.getElementsByTagName('BODY')[0];
alphaBanner.insertAdjacentHTML('afterbegin', '<section class="experimental alpha-top" role="banner"><h2 class="wb-inv">This webpage is in alpha</h2><div class="container"><small><span class="alpha-label">Alpha</span>&nbsp;&nbsp; This is an experimental version of Canada.ca for public testing.</small></div></section>');

/*<section class="experimental alpha-top" role="banner"><h2 class="wb-inv">This webpage is alpha and is looking for feedback</h2><div class="container mrgn-tp-sm mrgn-bttm-sm"><small>Provide feedback for this prototype web page</small>&nbsp;&nbsp;<a href="https://craepmd.optimalworkshop.com/questions/b4r456f3/questions/before" class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">Feedback form<span class="wb-inv"> opens in new window</span></a></div></section > */



//Seperate script to null all canada.ca links to a 404 page
$(document).ready(function(){$("a[href*='canada.ca']").attr("href", "https://cra-proto.github.io/eol-2/validation/404.html");});

//Remove visited link design from 404 pages
var visited_link_styling = "<style> a[href='https://cra-proto.github.io/eol-2/validation/404.html']:visited{ color:#284162; } </style>"; $('head').append( visited_link_styling );
