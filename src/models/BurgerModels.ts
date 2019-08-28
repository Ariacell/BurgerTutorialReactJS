
export type Ingredients = 'patty' | 'cheese' | 'salad' | 'beetroot';

export enum EIngredients {
    patty = 'patty',
    cheese='cheese',
    salad='salad',
    beetroot='beetroot'
}

export const Controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Beetroot', type: 'beetroot' },
    { label: 'Patties', type: 'patty' },
    { label: 'Cheese', type: 'cheese' },
];

export type BurgerContents = { [k in EIngredients]?: number};

export type DisabledControls = [Ingredients, boolean][]