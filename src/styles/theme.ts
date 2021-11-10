const textTheme = (base:number,step:number) => {
    return {
        100:base/step,
        200:base,
        300:base*step,
        400:base*(step**2),
        500:base*(step**3),
        600:base*(step**4),
        700:base*(step**5),
    }
}

export const theme = {text:{...textTheme(1,1.25)}}