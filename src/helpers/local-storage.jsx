export const setData = (key , data) => {
    try {
        localStorage.setItem(key, data )
    } catch (error) {
        console.log("error data ");
    }
}