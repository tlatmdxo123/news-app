const textTheme = (base:number,step:number) => {
    return {
        100:base/step+'em',
        200:base+'em',
        300:base*step+'em',
        400:base*(step**2)+'em',
        500:base*(step**3)+'em',
        600:base*(step**4)+'em',
        700:base*(step**5)+'em',
    }
}

export const theme = {fontSize:{...textTheme(1,1.25)}}