function darkMode(){
    const pagina = document.body
    pagina.classList.toggle('dark-mode')

    const isDark = document.body.classList.contains('dark-mode')
    
    // const textBtn = isDark ? 'Modo Claro' : 'Modo Escuro';
    // document.querySelector('button').textContent = textBtn;

    const btn = document.querySelector('button')
    if(isDark == true){
        btn.textContent = 'Modo Claro'
    }else{
        btn.textContent = 'Modo Escuro'
    }
}