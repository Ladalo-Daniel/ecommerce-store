





const someEl = document.querySelector('.nav-input');
someEl.addEventListener('click', () => {
  // Create a modal box element
  const markUp = `
  <div class="modal">
    <p>I have some elements</p>
  </div>
  `
  someEl.insertAdjacentHTML('beforeend', markUp);

  const modal = document.querySelector('.modal');

  // Close the modal box when clicked outside of it
  modal.addEventListener('click', () => {
    modal.add();
  });

  console.log('Hey, you clicked me!');
});





/*
1. #0466C8
2. #0353A4
3. #023E7D
4. #002855
5. #001845

001233
33415C
5C677D
7D8597
979DAC

gray 
black



const navElement = document.querySelector('.nav-element-1');

navElement.addEventListener('click', (event) => {
  // Check if the clicked element is an <a> tag or a <span> tag
  if (event.target.tagName === 'A' || event.target.tagName === 'SPAN') {
    event.preventDefault(); // Prevent the default link behavior

    // Access the text content of the clicked <a> tag or its parent <span> tag
    const linkText = event.target.closest('a').textContent;
    console.log(`Clicked on: ${linkText}`);
  }
});




const navElement = document.querySelector('.nav-element-1');

navElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    event.preventDefault();
    
    // Create a modal box element
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.textContent = 'This is the modal box.';
    
    // Append the modal box to the body
    document.body.appendChild(modal);
    
    // Close the modal box when clicked outside of it
    modal.addEventListener('click', () => {
      modal.remove();
    });
  }
});


*/

