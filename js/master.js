document.observe("dom:loaded", function() {
  //Get rid of stupid extra nbsp in side panel
  $$('#side-panel #navigation #tasks .task').each(function(c,i){


  	// START BY FIXING THE HTML IN THE SIDE PANEL
  	var newlink = document.createElement('a');
  	newlink.href = c.children[0].href
	newlink.innerHTML = c.children[0].innerHTML;
	newlink.innerHTML += c.children[1].innerHTML;
	c.innerHTML="";
	c.appendChild(newlink)



	//TODO: Change all the icons
  	
  });
});
