
export const delay = async (value?: number): Promise<void> => {
    if (value === undefined) value = 2000
    await new Promise<void> ((resolve) => {
        setTimeout(() => console.log(`Запуск задержки на ${value}`), value)
        resolve();
    })
}

export const delayRandom = async (min?: number, max?: number): Promise<void> => {
    if (min === undefined) min = 1000
    if (max === undefined) max =  5000
    let randInterval: number = Math.floor(Math.random() * (max - min + 1)) + min
    await new Promise<void>( (resolve) => {
        setTimeout(()=>{
            randInterval = randInterval / 1000
            console.log(`Задержка интернета, равная ${randInterval} секундам`)
        },randInterval)
        resolve()
    })
}