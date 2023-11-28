function pageModification() {

  const f_name = document.getElementById('f-name').value;
  const m_init = document.getElementById('m-initial').value;
  const l_name = document.getElementById('l-name').value;

  const new_header = `Welcome! fellow, <strong id="fb-greeting">CleanEnergySmithers</strong>, ${f_name} ${m_init ? ' ' + middleInitial + '.' : ''} ${l_name}!`;

  document.getElementById('greeting').textContent = new_header;

  const scrnMessage = document.getElementById('scrnMessag');

  scrnMessage.innerHTML = '';

  const number = document.getElementById('number');
  const count = parseInt(number);

  for (let i = 1; i <= count; i++) {
    const reply = document.createElement('li');

    reply.textContent = `${i} - Wattage number ${i % 2 === 0 ? 'is even' : 'is odd'}`;

    scrnMessage.append(reply);
  }
}