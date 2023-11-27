import { updateEditedPostDB } from '../firebase/firestore';

export const editPostModalRender = (postId, initialContent) => {
  // Ventana que se sobrepone a la vista de publications
  const modalEditPost = document.createElement('div');

  modalEditPost.classList.add('pupUp');

  // Alert donde se guardaran las publicaciones
  const alertEditPost = document.createElement('article');
  alertEditPost.classList.add('alertPopUp');
  // ----- style

  // Eventos para el control de la viusalizacion o cierre del popup
  modalEditPost.addEventListener('click', () => {
    modalEditPost.style.display = 'none';
  });
  alertEditPost.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // ----- Cuerpo de la publicación ----- //
  const bodyPost = document.createElement('section');
  bodyPost.classList.add('alertMainSection');

  const inputTextLabel = document.createElement('label');
  inputTextLabel.setAttribute('for', `alertInputEdit${postId}`);
  inputTextLabel.textContent = 'Recomendacion';
  inputTextLabel.classList.add('alertInputLabel');

  const inputTextPost = document.createElement('textarea');
  inputTextPost.classList.add('alertInput');
  inputTextPost.id = `alertInputEdit${postId}`;
  inputTextPost.value = initialContent;

  bodyPost.appendChild(inputTextLabel);
  bodyPost.appendChild(inputTextPost);

  // ----- Pie de la publicación ----- //
  const footerPost = document.createElement('footer');
  // ----- style
  footerPost.classList.add('alertFooter');

  // Elementos del pie de página del post

  // Enviar post
  const buttonSaveEditedPost = document.createElement('button');
  buttonSaveEditedPost.innerText = 'Actualizar';
  buttonSaveEditedPost.classList.add('standarButton');
  footerPost.appendChild(buttonSaveEditedPost);

  buttonSaveEditedPost.addEventListener('click', () => {
    updateEditedPostDB(postId, inputTextPost.value);
  });

  alertEditPost.append(bodyPost, footerPost);

  modalEditPost.appendChild(alertEditPost);

  return modalEditPost;
};
