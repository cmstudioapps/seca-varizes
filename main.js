let banner = document.getElementById("banner")
let carregando = document.getElementById("carregando")
let dados = document.getElementById("dados")
carregando.showModal()

let dispositivo = navigator.userAgent

let aplicativo = localStorage.getItem("app") || false


 if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // código para dispositivos móveis
    console.log("Usuário está em um dispositivo móvel.");
    let app = document.getElementById("app")
  if (aplicativo === false) {
    
    
    app.showModal()
    
  } else {
    
    
    app.close()
    
  }
    
    
} else {
    // código para desktop
    console.log("Usuário está em um desktop.");
    banner.src = "tela-secundaria.png"
    banner.style.height = 8 + "%"
    banner.style.width = 100 + "%"
    
    dados.style.fontSize = "40px"
    dados.style.color = "white"
}





window.addEventListener("load", function() {
  
  carregando.close()
  
  
  
})


function abrir() {
  
  window.location.href = "classes.png"
  
}

function dps() {
  
  
  app.close()
}

function baixar() {
  
  aplicativo = true
  localStorage.setItem("app",aplicativo)
  
  
    // Verifica se o navegador suporta a API 'navigator.share'
    if (navigator.canShare && navigator.canShare({ files: [document.getElementById("arquivo").href] })) {
        // Se suportado, solicita a instalação
        navigator.share({ files: [document.getElementById("arquivo").href] })
            .then(() => console.log('Arquivo compartilhado com sucesso.'))
            .catch((error) => console.log('Erro ao compartilhar arquivo:', error));
    } else {
        // Se não suportado, avise o usuário para instalar manualmente
        alert("Seu navegador não suporta a solicitação de instalação automática. Por favor, instale manualmente após o download.");
    }

  
  
}

function compartilhar() {
  
  
  if (navigator.share) {
    navigator.share({
        title: 'App seca varizes',
        text: 'Conheça o seca varizes, veja nossas receitas.',
        url: window.location.href
      })
      .then(() => console.log('Conteúdo compartilhado com sucesso!'))
      .catch((error) => console.error('Erro ao compartilhar conteúdo:', error));
  } else {
    console.log('API Web Share não suportada neste navegador.');
  }

  
  
}