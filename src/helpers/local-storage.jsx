export const setData = (key , data) => {
    try {
        localStorage.setItem(key, data )
    } catch (error) {
        console.log("error setData data ");
    }
}

export const getItem = key => {
    try {
        return localStorage.getItem('token')
    } catch (error) {
        console.log("error get Data");
    }
}

export const removeItem = key => {
    try {
        localStorage.removeItem(key)  
    } catch (error) {
        console.log("error loguot");
    }
}