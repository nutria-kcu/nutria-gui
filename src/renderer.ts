console.log("Renderer process is running with TypeScript!");
// interface Window {
//     api: {
//         callHpHack: (input: number) => Promise<void>;
//         callAmmoHack: (input: number) => Promise<void>;
//         callArmorHack: (input: number) => Promise<void>;
//         callRecoilHack: (option: number) => Promise<void>;
//         checkAC: () => Promise<boolean>;
//     };
// }
// const handleHpHack = async (hpInput: number) => {
//     const result = await window.api.callHpHack(hpInput); // Call the main process
//     console.log(result);
// };

// const handleAmmoHack = async (ammoInput: number) => {
//     const result = await window.api.callAmmoHack(Number(ammoInput));
//     console.log(result);
// };

// const handleArmorHack = async (armorInput: number) => {
//     const result = await window.api.callArmorHack(Number(armorInput));
//     console.log(result);
// };

// const handleRecoilHack = async (recoilOption: number) => {
//     const result = await window.api.callRecoilHack(Number(recoilOption));
//     console.log(result);
// };

// const handleCheckAC = async () => {
//     const result = await window.api.checkAC(); // This returns a boolean from the main process
//     //  // Update the UI with the result
//     return result; // Return the boolean result from this function
// };

// const detectAC = () => {
//     console.log("detectAC");
// }