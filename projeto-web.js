const turmas = [{
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numeroAlunos: 150,
    período: "Noturno",
    concluida: false,
},
{
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroAlunos: 200,
    período: "Integral",
    concluida: false,
},
{

    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    término: "15/10/2022",
    numeroAlunos: 180,
    período: "Noturno",
    concluida: true,

    turma: "Zhenyi",
    curso: "HTMLe CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numeroAlunos: 80,
    período: "Integral",
    concluida: false,
},
{
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    término: "04/09/2022",
    numeroAlunos: 200,
    período: "Noturno",
    concluida: true,
},
{
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numeroAlunos: 100,
    período: "Integral",
    concluida: true,

    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numeroAlunos: 200,
    período: "Noturno",
    concluida: true,
},
{
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroAlunos: 90,
    período: "Integral",
    concluida: false,
}
]

const cursos = [{
    curso: "HTML e CSS",
    descricao: "Do nada ao infinito",
    duracao: "1 mês",
    valor: 500
},
{
    curso: "JavaScript",
    descricao: "Do nada ao infinito",
    duracao: "2 mêses",
    valor: 900
},
{
    curso: "APIsRest",
    descricao: "Do nada ao infinito",
    duracao: "6 mêses",
    valor: 2000
}
]

const estudantes = [{


    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    numeroDeParcelas: 9,
    desconto: false,
    valorDaParcela: 100

},
{
    estudante: "Halle Berry ",
    turma: "Burnel",
    curso: "APIsRest",
    valor: 2000,
    numeroDeParcelas: 4,
    desconto: false,
    valorDaParcela: 500
},
{
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    numeroDeParcelas: 0,
    desconto: true,
    valorDaParcela: 0
}
]

const buscarCurso = () => {

    const curso = cursos.find(cadaCurso =>{
        if(cadaCurso.curso.toLocaleLowerCase().includes(imputCurso.toLocaleLowerCase())){
        return cadaCurso
        }
    })
    
    return curso
    
    }
    
    const buscarTurma = () => {
        const turmaFiltrada = turmas.filter(cadaTurma =>{
            if (cadaTurma.turma.toLocaleLowerCase().includes(imputTurma)){
                return cadaTurma
            }
        })
    
    
    
    return turmaFiltrada.length > 0 ? gerarCards(turmaFiltrada) : gerarCards(turmas)
    }
    
    const buscarEstudante = (nomeEstudante) => {
        let estudante
        for(let cadaEstudante of estudante){
            if(cadaEstudante.estudante.toLocaleLowerCase().includes(nomeEstudante.toLocaleLowerCase))
            estudante = cadaEstudante
    
    }

if(estudante === undefined){
    estudante = "Aluno não encontrado"
}
    return estudante
    }

const matricular = (nomeAluno, nomeCurso, nomeTurma, nPar) =>{
    const buscarCurso = buscarCurso(nomeCurso)

    estudantes.push(
        {
            estudante: nomeAluno,
            curso: nomeCurso,
            turma: nomeTurma,
            valorCurso: valorLiquido,
            valorParcela: valorDaParcela,
            valorDesconto: valorDoDesconto,
            numeroParcela: nPar 
        }
    )
      

}


const carrinhoCursos = []

const adicionarCarinhoCursos = (nomeCurso) =>{
    const curso = buscarCurso(nomeCurso)
    carrinhoCursos.push(curso.valor)

    return carrinhoCursos
}


function parcelarCurso(nParcelas, carrinho) {    

    const nCursos=carrinho.length
    let percDesconto = nParcelas <= 2 ? 20 : 0

    nCursos===3 ? percDesconto +=15 : nCursos===2 ? percDesconto+=10 : 0
    
    let valorTotal=0
    for(valor of carrinho) valorTotal += valor    

    const valorDoDesconto = (valorTotal * (percDesconto/100) )
    const valorLiquido= (valorTotal - valorDoDesconto)
    
    const valorDaParcela=(valorLiquido/nParcelas)

   
if(percDesconto > 0){
    console.log(`O valor do pagamento é de R$${valorLiquido} com ${percDesconto}% de desconto, parcelado em ${nParcelas} de R$${valorDaParcela}`)
 
}else console.log(`O valor do pagamento é de R$${valorLiquido}, parcelado em ${nParcelas} de R$${valorDaParcela}`) 
    
    
}
parcelarCurso(5 ,[800])

const relatorioEstudante = (nomeEstudante) =>{
    const estudante = buscarEstudante(nomeEstudante)
    console.log(`Aluno: ${estudante.estudante}`)
    console.log(`Turma: ${estudante.turma}`)
    console.log(`Curso: ${estudante.curso}`)
    console.log(`Valor Total: ${valorLiquido}`)
    console.log(`Valor da parcela: ${valorDaParcela}`)
    console.log(`Nº de Parcelas: ${nParcelas}`)
}







    
    
    













    