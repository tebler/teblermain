function submitForm1()
{
   var regexp;
   var FileUpload1 = document.getElementById('FileUpload1');
   var FileUpload1_file = document.getElementById('FileUpload1-file');
   if (!(FileUpload1.disabled ||
         FileUpload1.style.display === 'none' ||
         FileUpload1.style.visibility === 'hidden'))
   {
      var ext = FileUpload1_file.value.substr(FileUpload1_file.value.lastIndexOf('.'));
      if ((ext.toLowerCase() != ".*zip") &&
          (ext != ""))
      {
         alert("ERROR: FILES MUST BE .ZIP");
         return false;
      }
   }
   return true;
}
$(document).ready(function()
{
   $("#FileUpload1 :file").on('change', function()
   {
      var input = $(this).parents('.input-group').find(':text');
      input.val($(this).val());
   });
   $("#FlipSwitch1").change(function()
   {
      if ($('#FlipSwitch1').is(':checked'))
      {
         ShowObject('Button1', 1);
      }
   });
   $("#FlipSwitch1").trigger('change');
});
