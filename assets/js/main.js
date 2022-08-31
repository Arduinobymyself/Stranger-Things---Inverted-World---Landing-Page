

import { subscribeToStrangerThings, getSubscriptions } from '../firebase/stranger-things.js';



console.log('JavaScript Rodando!')

//obtendo os objetos 
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

//adicionando o evento para pegar os dados
btnSubscribe.addEventListener('click', async () => {
    console.log('Clicou no botão Inscrever');
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    };
    console.log(subscription);

    //Salvando no banco de dados
    const subscriptionId = await subscribeToStrangerThings(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);

    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';    
    txtCharacter.value = '';
    btnSubscribe.value = '';
    alert(`Inscrito com sucesso: ${subscriptionId}`);


});

async function loadData(){
    const subscriptions = await getSubscriptions();
    console.log(subscriptions);
} 

loadData();
