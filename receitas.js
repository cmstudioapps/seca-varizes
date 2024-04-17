let resultado = document.getElementById("resultado")
resultado.style.display = "none"
function ok() {
  
  let idade = document.getElementById("idade").value
  
  let altura = document.getElementById("altura").value
  
  let peso = document.getElementById("peso").value
  
  let classe = document.getElementById("classificação").value
  resultado.style.display = "block"

  if (!classe || !idade || !altura || !peso || classe == "?") {
  
resultado.innerHTML = "Por favor preencha todos os dados!"
   resultado.style.backgroundColor = "red"
  
  
  } else {
    
    
  
  if (classe == "c1") {
  
  resultado.innerHTML = "Sua receita é a N° 1"
  
  }
  
  if (classe == "c2") {
    
  
  
  resultado.innerHTML = "Sua receita é a N° 2"
  
  }
  
  if (classe == "c3") {
  
  resultado.innerHTML = "Sua receita é a N° 3"
  
  }
  
  if (classe == "c4") {
  
  resultado.innerHTML = "Sua receita é a N° 4"
  
  }
  
  if (classe == "c5") {
  
  resultado.innerHTML = "Sua receita é a N° 5"
  
  }
  
  if (classe == "c6") {
  
  resultado.innerHTML = "Sua receita é a N° 6"
  
  }
  
  }
    
  scrollTo({
    
    top: 900,
   behavior: 'smooth'
    
  })
}