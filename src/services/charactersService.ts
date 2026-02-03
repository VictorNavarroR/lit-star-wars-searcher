import { config } from "../config";
import type { CharacterList } from "../types/CharacterList";
import { buildErrorResponse, type ErrorResponse } from "../utils/buildErrorResponse";

const { apiBaseUrl, apiEndpoint } = config;

interface ExtendedError extends Error {
    code?: number;
    response?: Response;
}

export const charactersService = {
    getCharacterByTerm: async (term: string): Promise<CharacterList | ErrorResponse> => {
        try {
            const response: Response = await fetch(`${apiBaseUrl}${apiEndpoint}?search=${term}`);

            if (!response.ok) {
                const error = new Error(`Error fetching characters: ${response.statusText}`);
                (error as ExtendedError).code = response.status;
                (error as ExtendedError).response = response;
                
                throw error;
            }

            return await response.json() as CharacterList;
        } catch (error) {
            return buildErrorResponse(error);
        }
    }
};