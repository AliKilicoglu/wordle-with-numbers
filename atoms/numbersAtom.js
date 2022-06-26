import { atom } from 'recoil'

export const numbersAtom = atom({
    key: 'numbersAtom',
    default: ['', '', '']
})