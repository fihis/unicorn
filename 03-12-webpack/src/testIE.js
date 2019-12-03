export function funcIE() {
    const a = { propa1: 'okay1', propa2: 'okay2'};
    const b = { propb1: 'okay1', propb2: 'okay2'};
    console.log({...a, ...b});
}