function pageModification() {

  const f_name = document.getElementById("f-name");
  const m_init = document.getElementById("m-initial");
  const l_name = document.getElementById("l-name");

  const new_header = `Welcome! fellow, <strong id="fb-greeting">CleanEnergySmithers</strong>, ${f_name} ${m_init ? ' ' + middleInitial + '.' : ''} ${l_name}!`;

  document.getElementById("greeting").textContent = new_header;

  const number = document.getElementById("number");
  const count = parseInt(number);

  for (let i = 1; i <= count; i++) {
    const reply = document.createElement('li');

    reply.textContent = `${i} - Wattage number is ${i % 2 === 0 ? 'even' : 'odd'}`;

    output.appendChild(reply);
  }
}