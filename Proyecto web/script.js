function iniciar(){     //funcion con la api storage 
    var boton=document.getElementById('grabar');   //llama al input grabar para que obtenga los datos del los input 
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
    }
    function nuevoitem(){
    var clave=document.getElementById('clave').value;   //obtiene lo que esta en los caracteres de los inputs 
    var valor=document.getElementById('texto').value;
    localStorage.setItem(clave,valor);          //Funcion localsatorage que accede a los datos almacenados dentro de los input 
    mostrar();
    document.getElementById('clave').value='';
    document.getElementById('texto').value='';
    }
    function mostrar(){                 //funcion mostrar que hace que recorar por toda la palabra y se muestre en un parrafo dentro de la pagina
    var cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML='';
    for(var f=0;f<localStorage.length;f++){
    var clave=localStorage.key(f);
    var valor=localStorage.getItem(clave);
    cajadatos.innerHTML+='<div>'+clave+' - '+valor+'</div>';
    }
    }
    window.addEventListener('load', iniciar, false);
    function elimina()//funcion que elimina los datos almacenados dentro del navegador 
    {
    
        if(confirm('Está Seguro?')){
            localStorage.clear();
            mostrar();
            }
    }