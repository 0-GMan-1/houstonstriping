export const quote = (state = {started: false, ended: true, submitted: false, type:''}, action)  => {
	switch (action.type) {
		case 'QUOTE_STARTED':
			return {
				...state,
				started: true,
                ended: false
			}
        case 'QUOTE_DATARESET':
            return {
                ...state,
                started: false,
                ended: true
            }
        case 'QUOTE_COMPLETED':
            return {
                ...state,
                completed: true,
                started: false,
                ended: false
            }
		default:
			return state
	}
}

export const scroll = (state = {reviews: false, services: false, about: false}, action)  => {
	switch (action.type) {
		case 'REVIEWS':
			return {
				...state,
				reviews: true,
                services: false,
                about: false
			}
        case 'SERVICES':
            return {
                ...state,
                reviews: false,
                services: true,
                about: false
            }
            case 'ABOUT':
                return {
                    ...state,
                    reviews: false,
                    services: false,
                    about: true
                }
        case 'EMPTY':
            return {
                ...state,
                reviews: false,
                services: false,
                about: false,
            }
		default:
			return state
	}
}