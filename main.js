import { showModal, hideModal } from './modal.js';

document.getElementById('formul').addEventListener('submit', function(event) {
    event.preventDefault();
    showModal();
});

document.getElementById('clase-modal').addEventListener('click', () => {
    hideModal();
});
