function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("java")

const secondLang = document.querySelector("li:nth-child(2)")
