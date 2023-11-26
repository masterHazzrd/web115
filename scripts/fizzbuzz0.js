function displayModifiedPage() {
    var f_Name = document.getElementById('f-name').value;
    var m_Intial = document.getElementById('m-initial').value;
    var l_Name = document.getElementById('l-name').value;



    var number = parseInt(document.getElementById('numberInput').value);
    var output = document.getElementById('output');
  
    if (name === '' || isNaN(number)) {
      output.textContent = 'Please enter both your name and a valid number.';
    } else {
      var message = 'Welcome, ' + name + '! ';
      for (var i = 0; i < number; i++) {
        message += 'Stand message ';
      }
      output.textContent = message;
    }
  }