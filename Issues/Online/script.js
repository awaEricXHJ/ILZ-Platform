function SendApplication() {
  var QQName = document.getElementById('QQName').value;
  var MCName = document.getElementById('MCName').value;
  var Address = document.getElementById('Address').value;
  var Content = document.getElementById('Content').value;

  document.getElementById(
    'result'
  ).innerHTML = `<iframe src="https://api.mmp.cc/api/mail?email=offical.fs@qq.com&key=hpnbpvnoypeyebab&mail=uh20130702@outlook.com&title=New Application Recieved&name=Issue Luzhou&text=${QQName}(${MCName})-Addr.${Address}: ${Content}"></iframe>`;

  mdui.alert(
    '身份证办理申请已发送，请耐心等候消息，<br>并注意查看内群动态。',
    '申请完成'
  );
}
