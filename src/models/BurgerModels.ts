
export type Ingredients = 'patty' | 'cheese' | 'salad' | 'beetroot';

export enum EIngredients {
    patty = 'patty',
    cheese='cheese',
    salad='salad',
    beetroot='beetroot'
}

export type KeyValuePair<U,T> = {
    [0]: U;
    [1]: T;
}

export type BurgerContents = { [k in Ingredients]: number};

export type DisabledControls = [Ingredients, boolean][]