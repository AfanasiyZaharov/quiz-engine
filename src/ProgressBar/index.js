export class ProgressBar{

    constructor(container, maxSections){
        this.container = container;
        this.maxSections = maxSections;

        this.elem = document.createElement('div');
        this.elem.className = 'progressElemBG';
        this.mainWidth = container.getBoundingClientRect().width
        this.elem.style.width = `${this.mainWidth}px`

        this.container.appendChild(this.elem)

        for(let i = 0; i<maxSections; i++){
            let innerElem = document.createElement('div');
            innerElem.className = 'progressElem';
            innerElem.setAttribute('sectionNumber', i)
    
            this.elem.appendChild(innerElem)
        }

    }

    setSection(sectionNumber){

        this.mainWidth = this.container.getBoundingClientRect().width
        this.elem.style.width = `${this.mainWidth}px`

        let width = (this.mainWidth - ((this.maxSections)* 5))  / this.maxSections;
        let allElems = this.elem.querySelectorAll('.progressElem')
        allElems.forEach(elem =>{
            let elemSectionNumber = elem.getAttribute('sectionNumber')
            if(elemSectionNumber < sectionNumber){
                elem.style.width = `${width}px`
                elem.classList.remove('progressElemLast')
            }else if (elemSectionNumber ==  sectionNumber){
                elem.style.width = `${width}px`
                elem.classList.add('progressElemLast')
            }else{
                elem.style.width = `0px`
                elem.classList.remove('progressElemLast')
            }
        })
    }

    hide(){
        this.elem.style.display = 'none';
    }

}