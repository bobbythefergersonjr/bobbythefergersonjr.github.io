function comment(){
	if (document.getElementById('comment').style.display == 'block'){
		document.getElementById('comment').style.display = 'none';
		document.getElementById('commentField').value = 'Your Comment Here...';
	} else {
		document.getElementById('comment').style.display = 'block';
	}
}
