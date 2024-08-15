const urlInput = document.querySelector('.url')
const titleInput = document.querySelector('.title')
const btn = document.querySelector('.bookmark-btn')
const list = document.querySelector('.output-list')

btn.addEventListener('click', addToList)
list.addEventListener('click', clickItem)

function addToList (e) {
    e.preventDefault()
    let url = urlInput.value
    let title = titleInput.value
    let editedItem = document.querySelector('.marker')

    if(!editedItem){
        if(url !== '' && title !== ''){
            showListItem(url, title)

            urlInput.value = ''
            titleInput.value = ''
        }
    }else{
        editedItem.firstElementChild.setAttribute('href', url)
        editedItem.firstElementChild.textContent = title

        editedItem.classList.remove('marker')
        urlInput.value = ''
        titleInput.value = ''
    }

}

function showListItem(url, title){
    let li = document.createElement('li')

    let a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    a.textContent = title

    li.appendChild(a)

    let edit = document.createElement('div')
    let cross = document.createElement('div')
    edit.textContent = 'Edit'
    cross.textContent = 'X'
    edit.classList.add('edit')
    cross.classList.add('cross')

    li.appendChild(edit)
    li.appendChild(cross)

    list.appendChild(li)
}

function clickItem(e){
    if(e.target.classList.contains('cross')){
        e.target.parentElement.remove()
    }else{
        editItem(e)
    }
}

function editItem(e){
    if(e.target.classList.contains('edit')){
        let element = e.target.parentElement
        let url= e.target.parentElement.firstElementChild.getAttribute('href')
        let title = e.target.parentElement.firstElementChild.textContent

        element.classList.add('marker')

        urlInput.value = url
        titleInput.value = title
    }
}