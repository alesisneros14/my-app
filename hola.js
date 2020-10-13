const gameCategory = "açao"

const url = `www.pepito.com/juegos/category/${gameCategory}`

const encodedUrl = encodeURI(url)

console.log("url sin encodear -> ", url)
console.log("la url encodeada -> ", encodedUrl)