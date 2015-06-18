function browse_elements(start, output_id) {
    //get the element to browse
    var elements = start.children;
    var output = document.getElementById(output_id);    
    for (var i = 0; i < elements.length; i++) {
        output.innerHTML += "Found element:" + elements[i].tagName + " with id: " + elements[i].id + "<br />"
        browse_elements(elements[i], output_id);
    }
	document.getElementById('wyczysc_wyjscie').disabled = 0;
	document.getElementById('out_1').disabled = 1;
}

function add_elements(start, output_list) {
    //get the element to browse
    var elements = start.children;
    //iterates through children
    for (var i = 0; i < elements.length; i++) {

        //create list item element
        var li_element = document.createElement('li');

        // create a text node
        var text_element = document.createTextNode("Found element:" + elements[i].tagName +
              " with id: " + elements[i].id);

        // appedn text to li
        li_element.appendChild(text_element);

        // append li to output list
        output_list.appendChild(li_element);

        // go for recurency
        add_elements(elements[i], output_list);
    }
	document.getElementById('wyczysc_wyjscie').disabled = 0;
	document.getElementById('out_2').disabled = 1;
}

function wyczysc_wszystko(out_list, output){	 
var div_out_1 = document.getElementById('out_list')
var div_out_2 = document.getElementById('output')
 
 if(div_out_1.firstChild || div_out_2.firstChild)
	{
		while(div_out_1.hasChildNodes())
		{   
			div_out_1.removeChild(div_out_1.firstChild);
		}
		while(div_out_2.hasChildNodes())
		{   
			div_out_2.removeChild(div_out_2.firstChild);
		}
	}    
document.getElementById('wyczysc_wyjscie').disabled = 1;
document.getElementById('out_1').disabled = 0;
document.getElementById('out_2').disabled = 0;
}