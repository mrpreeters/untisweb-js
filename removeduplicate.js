// author: robi pritrznik, 2016
// license MIT 

/*
 
Copyright (c) 2016 Robi Pritrznik

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 
*/
 
 /*
 * You may think you know what the following code does.
 * But you don't. Trust me.
 * Fiddle with it, and you'll spend many sleepless
 * nights cursing the moment you thought you'd be clever
 * enough to "optimize" the code below.
 * Now close this file and go play with something else.
 */ 
 
 
// remove duplicate values in table
 $(function() 
 {
	var seen = {};
	$('table tr ').each(function ()
	{
		var txt = $("td:first-child + td", $(this)).text();
		if (seen[txt]) $(this).remove();
		else seen[txt] = true;
	}
);
  
// remove unnecessary tables
$('table:nth-child(1)').remove();
$('table:nth-child(4)').remove();
$('font:nth-child(4)').remove();
// add class sortable to table
$('table').addClass("sortable");

// replace dots with slashes in dates
$('table td:nth-child(2)').each(function (i, el)
{
	var txt = $(el).text();
	$(el).text(txt.replace(/\./g, '/'));
});

// format months to UTF format
$(' td:nth-child(2)').each(function (i, el)
{
	for (j = 1; j < 10; j++) 
	{ 
		var current = $(el).text().trim();
		var new_date;
		if(current.includes("/"+j+"/") == true)
		{
			new_date = current.replace('/'+j+'/', '/0'+j+'/');
		}
		$(el).html(new_date);
	}
});

// append year to date
$(' td:nth-child(2)').each(function (i, el)
{
	for (j = 1; j < 10; j++)
	{ 
		var current = $(el).text().trim();
		var new_date;
		var year = new Date().getFullYear();
		var next_year = new Date().getFullYear()+1;

		if(current.includes("/0"+j) == true && (j <10))
		{	
			new_date = current+next_year;
		}
		else if(current.includes("/10") == true || current.includes("/11") == true || current.includes("/12") == true)
		{
			new_date = current+year;
		}
	}
	$(el).html(new_date);
});

// send click event on table to sort values
window.onload = function()
{
	(document.getElementsByTagName( 'td' )[1]).click();
};
	
 });