import {atom} from 'recoil'
import {recoilPersist} from 'recoil-persist'

const {persistAtom} = recoilPersist({
    key: 'recoil-persist',
    storage: sessionStorage

})

export const dataState = atom({
    key: 'dataOne',
    default: {},
    effects_UNSTABLE: [persistAtom]
})

