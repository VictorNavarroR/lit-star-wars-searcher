import './UI/app-input';
import './UI/app-button';
import './components/app-card';
import './components/app-list';
import './UI/app-loader';
import './UI/app-modal';
import './components/app-alert';

import { debounceRequest } from './utils/debounceRequest';
import { charactersService } from './services/charactersService';
import type { Character, CharacterList } from './types/CharacterList';
import { ComponentEvents } from './types/ComponentEvents';

interface CustomHTMLElement extends HTMLElement {
    visible?: boolean;
    type?: string;
    characters?: CharacterList | {};
}

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

    const loaderElement = document.querySelector('app-loader') as CustomHTMLElement;
    loaderElement.visible = true;

    const listElement = document.querySelector('app-list') as CustomHTMLElement;
    const alertElement = document.querySelector('app-alert') as CustomHTMLElement;

    const character: string = e?.detail?.message;

    if (!character) {
      characterList = {};
      loaderElement.visible = false;
      alertElement.visible = false;
      return
    };

    try {
        characterList = await getCharacterByTerm(character);
        if(characterList?.results.length === 0) {
            alertElement.visible = true;
            alertElement.type = 'info';
            alertElement.innerHTML = `🫣 No characters found for "${character}". Please try another search term.`;
        } else {
            alertElement.visible = false;
        }
    } catch (error) {
        loaderElement.visible = false;
        alertElement.visible = true;
        alertElement.type = 'error';
        alertElement.innerHTML = `😒 An error occurred while fetching data. Please try again later.`;
        return
    };

    listElement.characters = {...characterList};

    loaderElement.visible = false;
    

}, 700);

const handleModal = (character: Character) => {
    const modalElement = document.querySelector('app-modal') as any;
    modalElement.innerHTML = `
        <h2>${character?.name}</h2>
        <p><strong>Birth year:</strong> ${character?.birth_year}</p>
        <p><strong>Gender:</strong> ${character?.gender}</p>`
    modalElement.visible = !modalElement.visible;
}

