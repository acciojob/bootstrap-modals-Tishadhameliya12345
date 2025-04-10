//your code here
const openModalBtn = document.getElementById('open-modal');
    const newtonModal = new bootstrap.Modal(document.getElementById('newton-modal'));

    openModalBtn.addEventListener('click', () => {
      newtonModal.show();
    });