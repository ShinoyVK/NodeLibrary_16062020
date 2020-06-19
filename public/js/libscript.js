function checkPassword()
{
    var pas1=document.getElementById("pass1").value;
    var pas2=document.getElementById("pass2").value;

    if(pas1!=pas2)
    {
        alert("Password Mismatch");
        return false;
    }
}
/*
function uploadImage()
{
    let inputField=document.getElementById('imageinput');
    let file=inputField.files;
    let fileReader = new FileReader;
    fileReader.onload=function(event){
        let imageUrl = fileReader.result;
        $("#imagepreview").attr("src",'${imageUrl}');
    }
    fileReader.readAsDataURL(file[0]);

}
*/

function loadPdf()
{
    let inputField=document.getElementById('fileinput');
    let file=inputField.files;
    let fileReader = new FileReader;
    fileReader.onload=function(event){
        let fileContent = fileReader.result;

    }
    fileReader.readAsText(file[0]);

}

var loadFile = function(event) {
	var image = document.getElementById('imagepreview');
	image.src = URL.createObjectURL(event.target.files[0]);
};
