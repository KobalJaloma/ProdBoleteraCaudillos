export const successResponse = (message) => {
    return {
        status : 'OK',
        message : message ?? 'Tu Peticion Fue Exitosa'
    }
}

export const errorResponse = (message, error) => {
    return {
        status: 'ERROR',
        message: message ?? 'Tu Peticion Sufrio Un Error',
        error : error ?? ''
    }
} 

export const failResponse = (message, code, error) => {
    return {
        status: 'FAIL',
        message: message ?? 'Tu Peticion Sufrio Un Error',
        errorCode: code ?? '',
        error: error ?? '' 
    }
}