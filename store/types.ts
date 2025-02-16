export enum ProductType {
    PLAYTIME = 'peliaika',
    BUTTON = 'rintamerkit',
    ITEM = 'itemit',
    MAGNET = 'magneetit',
    OTHER = 'muut'
}

export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string | null
    type: ProductType
    playtime?: number
    sale?: boolean
    originalPrice?: number
}

export type TCartProduct = {
    product: Product
    amount: number
}

export interface AppState {
    cart: TCartProduct[]
}

export enum AppActionType {
    INCREMENT,
    DECREMENT,
    SET,
    REMOVE,
    ADD,
    CLEAR
}

interface BaseActionPayload {
    id?: string
}

interface BaseAction {
    type: AppActionType
    payload?: any
}

export interface IncrementProductAmountAction extends BaseAction {
    type: AppActionType.INCREMENT
    payload: BaseActionPayload
}

export interface DecrementProductAmountAction extends BaseAction {
    type: AppActionType.DECREMENT
    payload: BaseActionPayload
}

export interface SetProductAmountAction extends BaseAction {
    type: AppActionType.SET
    payload: {
        id: string
        amount: number
    }
}

export interface RemoveProductAction extends BaseAction {
    type: AppActionType.REMOVE
    payload: BaseActionPayload
}

export interface AddProductAction extends BaseAction {
    type: AppActionType.ADD
    payload: {
        id: string
        product: Product
    }
}

export interface ClearCartAction extends BaseAction {
    type: AppActionType.CLEAR
}

export type AppAction =
    | IncrementProductAmountAction
    | DecrementProductAmountAction
    | SetProductAmountAction
    | AddProductAction
    | RemoveProductAction
    | ClearCartAction
