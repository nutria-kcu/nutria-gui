/// <reference types="react-scripts" />

interface Window {
    electron: {
        callHpHack: (input: number) => Promise<void>,
        callAmmoHack: (input: number) => Promise<void>,
        callArmorHack: (input: number) => Promise<void>,
        callRecoilHack: (option: number) => Promise<void>,
        checkAC: () => Promise<boolean>
    };
}
