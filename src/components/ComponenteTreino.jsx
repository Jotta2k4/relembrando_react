import React from "react";

function ComponenteTreino() {

    //Verficador de imagens

    // const onClickBotao = () => {
    //     const input = document.getElementById('input');
    //     const valorDoInput = input.value ? input.value.trim() : '';
    //     const comecaComHttp = valorDoInput.startsWith('http://') || input.value.startsWith('https://');
    //     const terminaComJpgOuPng = valorDoInput.endsWith('.jpg') || input.value.endsWith('.png');
    //     const campoDaImagem = document.getElementById('campoDaImagem');

    //     if (comecaComHttp && terminaComJpgOuPng) {
    //         const imagem = document.createElement('img');
    //         imagem.src = valorDoInput; 
    //         campoDaImagem.appendChild(imagem);
    //     } else {
    //         alert("Insira um link de imagem válido!");
    //     }
    // }

    // return (
    //     <div>
    //         <section>
    //             <h1>{props.titulo}</h1>
    //             <h3>{props.subtitulo}</h3>
    //             <input id='input' type="text" />
    //             <button onClick={onClickBotao}>Enviar</button>
    //         </section>
    //         <span id='campoDaImagem'>

    //         </span>

    //     </div>
    // )

    //----------------------------------------------------------------------------------------

    //Contador

    // const [valor, setValor] = React.useState(0);

    // const addNum = () => {
    //     setValor(valor + 1);
    // }

    // const removeNum = () => {
    //     setValor(valor - 1);
    // }

    // return (
    //     <div>
    //     <h1>Contador</h1>
    //     <p>{valor}</p>
    //     <button onClick={addNum}>Add</button>
    //     <button onClick={removeNum}>Remove</button></div>

    // )

    //----------------------------------------------------------------------------------------

    //Lista de compras

    const [valor, setValor] = React.useState('');
    const [itens, setItens] = React.useState([]);

    const addItem = () => {
        setItens([...itens, valor]);
        setValor('');
        console.log(itens);
    }

    const onChangeInput = (e) => {
        setValor(e.target.value);
    }

    return (
        <div>
            <h1>Lista de Compras</h1>
            <input 
                type="text"
                placeholder="insira um item" 
                value={valor}
                onChange={onChangeInput}/>
            <button onClick={addItem}>Adicionar</button>
            <ol>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}

export default ComponenteTreino;