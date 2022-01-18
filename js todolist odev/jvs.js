const gorevtextDOM = document.querySelector('#gorevtext');    
const ulDOM = document.querySelector('#list');
const butonDOM = document.querySelector('#buton')
butonDOM.addEventListener("click", newElement)

function newElement()
{   
    if (gorevtextDOM.value != "")
    {
        const liDOM = document.createElement('li');
        liDOM.innerHTML = gorevtextDOM.value;
        ulDOM.append(liDOM)
        const closeDOM = document.createElement('button')
        closeDOM.classList.add('btn-close','xbuton')
        closeDOM.setAttribute("type","button")
        closeDOM.setAttribute("aria-label","Close")
        closeDOM.setAttribute("onclick","xkapat()")
        closeDOM.innerHTML = ("x")
        liDOM.append(closeDOM)
        $('#liveToast').toast('show');
        gorevtextDOM.value = "";

        liDOM.addEventListener('click', function()
        {
            liDOM.classList.add('cizildi');
           const tikDOM = document.createElement('i');
            tikDOM.innerHTML = " ✔";
            liDOM.append(tikDOM);
            return liDOM;
        }
        )
    }
    else if (gorevtextDOM.value == "" || gorevtextDOM.value == null )
    {
        $('.error').toast('show');
    }
}




    const kaldir = document.querySelectorAll('.btn-close');
         kaldir[i].addEventListener("click", xkapat);
            function xkapat()
            {        
                var liDOM = document.querySelector('li');
                //for(var i=0; i<kaldir.length; i++)
                //kaldir[i].lastElementChild.style.display = "none";
                liDOM.classList.add('d-none');
            }
    
