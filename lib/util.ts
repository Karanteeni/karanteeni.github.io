export const randomFromArray = (a: any[]): any => (a ? a[Math.floor(Math.random() * a.length)] : undefined)
