function send() {
  let nember = '+212620490769';
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let type = document.getElementById("type").value;
  
  
  var url = 'https://wa.me/' + nember + '?text=' + ' الاسم : ' + name + '%0a' +
    'رقم الهاتف : ' + phone + '%0a' +
    'العنوان : ' + address + '%0a' +
    'القياس : ' + type + '%0a';
  window.open(url, '_blanck').focus();
}
