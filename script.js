
document.getElementById('repeatBtn').addEventListener('click', function () {
    const sentence = document.getElementById('sentence').value;
    const count = parseInt(document.getElementById('count').value, 10);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (sentence && count > 0) {
        const list = document.createElement('ol');

        for (let i = 0; i < count; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = sentence;
            list.appendChild(listItem);
        }
        
        outputDiv.appendChild(list);

    } else {
        outputDiv.textContent = 'please enter a positive number';
    }
});

