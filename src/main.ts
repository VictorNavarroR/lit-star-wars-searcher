import './UI/app-input';
import './UI/app-button';
import './components/app-card';
import './components/app-list';
import './UI/app-loader';
import './UI/app-modal';
import './components/app-error';

import { ComponentEvents } from './types/componentEvents';
import { debounceRequest } from './utils/debounceRequest';
import { charactersService } from './services/charactersService';
import type { Character, CharacterList } from './types/CharacterList';

const { getCharacterByTerm } = charactersService;

const { APP_INPUT_CHANGED, APP_BUTTON_CLICKED } = ComponentEvents;


document.addEventListener(APP_INPUT_CHANGED, (e: Event) => {
   handleInputChange(e)
});
  

let characterList: CharacterList | {} = {};

document.addEventListener(APP_BUTTON_CLICKED, (e: Event) => {
    handleModal((e as CustomEvent).detail.character);
});

const handleInputChange = debounceRequest(async (e: CustomEvent) => {

    const loaderElement = document.querySelector('app-loader') as any;
    loaderElement.setAttribute('visible', 'true');

    const listElement = document.querySelector('app-list') as any;

    const character: string = e?.detail?.message;

    if (!character) {
      characterList = {};
      loaderElement.removeAttribute('visible');
      return
    };

    characterList = await getCharacterByTerm(character);

    listElement.characters = {...characterList};

    loaderElement.removeAttribute('visible');
    

}, 700);

const handleModal = (character: Character) => {
    const modalElement = document.querySelector('app-modal') as any;
    modalElement.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Birth year:</strong> ${character.birth_year}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>`
    modalElement.visible = !modalElement.visible;
}

