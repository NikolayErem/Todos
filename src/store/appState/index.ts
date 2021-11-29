export type appState = {
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
}

export enum RequestStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error'
}


export const appStateHandler = (type: string): appState => {
    switch (type) {
        case RequestStatus.Success: 
            return {
                isLoading: false,
                isSuccess: true,
                isError: false,
            }
        case RequestStatus.Loading: 
            return {
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case RequestStatus.Error: 
            return {
                isLoading: false,
                isSuccess: false,
                isError: true,
            }
        default:
            return {
                isLoading: false,
                isSuccess: false,
                isError: false,
            }
    }
}