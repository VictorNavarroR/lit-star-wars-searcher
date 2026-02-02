import type { CharacterList } from "../types/CharacterList";

export const RequestsService = {

    get: async (url: string): Promise<CharacterList> => {

        const response: Response = await fetch(url);
        return response.json();
        
    }

};