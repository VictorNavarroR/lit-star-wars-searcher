import { config } from "../config";
import type { CharacterList } from "../types/CharacterList";
import { buildErrorResponse, type ErrorResponse } from "../utils/buildErrorResponse";

const { apiBaseUrl, apiEndpoint } = config;

export const charactersService = {

    getCharacterByTerm: async (term: string): Promise<CharacterList | ErrorResponse> => {

        try {
            const response: Response = await fetch(`${apiBaseUrl}${apiEndpoint}?search=${term}`);
            return response.json();
        } catch (error) {
            return buildErrorResponse(error);
        }
        
    }
}
