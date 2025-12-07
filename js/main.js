  const input = document.querySelector('.name');
  const addBtn = document.querySelector('.add');
  const customersBox = document.querySelector('.customers-list');
  const serveBtn = document.querySelector('.serve');
  const customerBook = document.querySelector('.customer-book');

  let counter = 0; 

  addBtn.addEventListener('click', function () {
    const name = input.value;

    if (!name) return; 

    counter++;

    const customerDiv = document.createElement('div');
    customerDiv.className = 'customer p-2 rounded-2 mt-2 ps-3 fs-6';
    customerDiv.textContent = `#${counter} - ${name}`;
    customersBox.appendChild(customerDiv);
    input.value = '';
    input.focus();
  });

  serveBtn.addEventListener('click', function () {
    const firstCustomer = customersBox.firstElementChild;

    customerBook.innerHTML =
      `<span class="fw-bold">Now Serving: </span> ${firstCustomer.textContent}`;

    customersBox.removeChild(firstCustomer);
  });
