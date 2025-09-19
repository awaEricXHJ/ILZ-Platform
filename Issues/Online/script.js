document.getElementById("form").addEventListener('submit',function(event)
{
  event.preventDefault();
  var QQName = document.getElementById('QQName').value;
  var MCName = document.getElementById('MCName').value;
  var Address = document.getElementById('Address').value;
  var Content = document.getElementById('Content').value;
  var Email = document.getElementById('Email').value;
  emailjs.send("ilzemailservice","ilzapply",{
    email: Email
  });
  emailjs.send("ilzemailservice","ilzasn",{
    email: "mc.ericxzm@outlook.com",
    reply: Email,
    qq: QQName,
    mcid: MCName,
    address: Address,
    content: Content
  });
  location.href = "/Issues/Online/Thank-You.html";
});
