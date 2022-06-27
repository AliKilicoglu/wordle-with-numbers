import { atom } from 'recoil'

export const numberColorsAtom = atom({
    key: 'numberColorsAtom',
    default: ['gray', 'gray', 'gray']
})