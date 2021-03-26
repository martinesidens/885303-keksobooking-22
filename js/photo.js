const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChoseElement = document.querySelector('.ad-form-header__input');
const preview = document.querySelector('.ad-form-header__preview img');
const fileChosePhoto = document.querySelector('.ad-form__input');


function setAvatarPhoto () {
    fileChoseElement.addEventListener('change', () => {
      const file = fileChoseElement.files[0];
      const fileName = file.name.toLowerCase();
      console.log(file);
    
      const matches = FILE_TYPES.some((element) => {
        return fileName.endsWith(element);
      });
    
      if (matches) {
        const reader = new FileReader();
    
        reader.addEventListener('load', () => {
            preview.src = reader.result;
          });
          reader.readAsDataURL(file);
      }
    
    });
}

export {setAvatarPhoto};

