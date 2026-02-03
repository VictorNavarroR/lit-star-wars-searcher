export type ErrorResponse = {
    message: string;
    code?: number;
}

export const buildErrorResponse = (error: unknown): ErrorResponse => {

    const errorResponse: ErrorResponse = {
        message: error?.message || 'An unexpected error occurred',
        code: error?.code || undefined,
    }

    return errorResponse

}