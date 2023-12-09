
function modGreeting() {

    let fName = document.getElementById('f_name').value
    let mInit = document.getElementById('m_init').value
    let lName = document.getElementById('l_name').value

    console.log(fName + ' ' + mInit + '. ' + lName);
    console.log(mInit.length)

    if (mInit.length > 0) {
        document.getElementById('greeting').innerHTML = 'Welcome CleanEnergySmither, ' + fName + ' ' + mInit + '. ' + lName +'!'; 
    } else {
        document.getElementById('greeting').innerHTML = 'Welcome CleanEnergySmither, ' + fName + ' ' + lName +'!'; 
    }

    const output = document.getElementById('output_message')
    let count = document.getElementById('number').value

    output.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const output_item = document.createElement('li');
        output_item.textContent = `Wattage ${i} - is ${i % 2 === 0 ? 'even' : 'odd'}`;
        output.appendChild(output_item);
    }

    setTimeout(function(){
    location.reload();
    }, 10000);
}



document.getElementById('submit').addEventListener('click', modGreeting);