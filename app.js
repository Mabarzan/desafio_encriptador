const textarea = document.getElementById('t_area');
const btn_encriptar = document.getElementById('btn_encriptar');
const btn_desencriptar = document.getElementById('btn_desencriptar');
const img_muneco = document.getElementById('img_muneco');
const mensaje_final = document.getElementById('mensaje_final'); //h3
const texto_busqueda = document.getElementById('texto_desea'); //p
const mensaje_encontrado = document.getElementById('ningun_mensaje'); //h2
const btn_copiar = document.getElementById('btn_copiar');

let cambio = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]
btn_encriptar.addEventListener("click", () => 
    {
    const texto = textarea.value;
    const contieneMayusculas = /[A-Z]/.test(texto);
    const contieneSignos =/[^a-zA-Z\s]/.test(texto);
    if (contieneMayusculas || contieneSignos) {
        /*Si el texto contiene mayúsculas, mostrar un mensaje de error
        document.querySelector('.no_encontrado').style.display = 'none';
        document.querySelector('.mensaje_encontrado').style.display = 'flex';
        mensaje_final.innerHTML = "ERROR!!!! El texto no puede contener mayúsculas ni caracter especiales";
        mensaje_final.style.color = 'red';
        */
       alert('ERROR!!!! El texto no puede contener mayúsculas ni caracter especiales');

    } else {
        const texto = textarea.value.toLowerCase();
        function encriptar(nuevotexto) {
            for (let i = 0; i < cambio.length; i++) {
                if (nuevotexto.includes(cambio[i][0])) {
                    nuevotexto = nuevotexto.replaceAll(cambio[i][0], cambio[i][1]);
                }
            }
            return nuevotexto;
        }
        const result_encriptado = encriptar(texto);
        
        // Mostrar el resultado
        document.querySelector('.no_encontrado').style.display = 'none';
        document.querySelector('.mensaje_encontrado').style.display = 'flex';
        
        mensaje_final.innerHTML = result_encriptado;
        mensaje_final.style.maxWidth = '100%';
        mensaje_final.style.boxSizing = 'border-box';
        mensaje_final.style.color = 'black'; // Cambia el color del texto según el diseño deseado
    }
});

btn_desencriptar.addEventListener("click", () => 
    {
        const texto = textarea.value;
        const contieneMayusculas = /[A-Z]/.test(texto);
        const contieneSignos =/[^a-zA-Z\s]/.test(texto);
        if (contieneMayusculas || contieneSignos) {
            /* Si el texto contiene mayúsculas, mostrar un mensaje de error
            document.querySelector('.no_encontrado').style.display = 'none';
            document.querySelector('.mensaje_encontrado').style.display = 'flex';
            mensaje_final.innerHTML = "ERROR!!!! El texto no puede contener mayúsculas ni caracter especiales";
            mensaje_final.style.color = 'red';
            */
            alert('ERROR!!!! El texto no puede contener mayúsculas ni caracter especiales');
        }
        else
        {
            const texto = t_area.value.toLowerCase();
            function desenencriptar(nuevotexto)
            {
                for(let i=0; i < cambio.length; i++)
                {
                if(nuevotexto.includes(cambio[i][1]))
                {
                    nuevotexto = nuevotexto.replaceAll(cambio[i][1], cambio[i][0]);
                };
            };
        return nuevotexto;
        }
        const result_desencriptado = desenencriptar(texto);
        
        // Mostrar el resultado
        document.querySelector('.no_encontrado').style.display = 'none';
        document.querySelector('.mensaje_encontrado').style.display = 'flex';
        
        mensaje_final.innerHTML = result_desencriptado;
        mensaje_final.style.maxWidth = '100%';
        mensaje_final.style.boxSizing = 'border-box';
        mensaje_final.style.color = 'black'; // Cambia el color del texto según el diseño deseado
    }
}); 


btn_copiar.addEventListener("click", () => 
{
    const textcopi = mensaje_final.textContent || mensaje_final.innerText; 
    navigator.clipboard.writeText(textcopi)
    .then(() => {
        alert('texto copiado')
    })
    .catch(err =>{
        console.error("error al copiar al portapales" ,err)
    })

}); 