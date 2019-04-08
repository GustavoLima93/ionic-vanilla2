(function (doc, win) {

    'use strict'

    const name = doc.querySelector('[data-js="name"]');
    const orcamento = doc.querySelector('[data-js="orcamento"]');
    const novo = doc.querySelector('[data-js="new"]');
    const clear = doc.querySelector('[data-js="limpar"]');
    const list = doc.querySelector('[data-js="lista"]');
    const total = doc.querySelector('[data-js="total"]');
    let soma = 0;

    async function alerta() {
        const alert = doc.querySelector('ion-alert-controller');
        await alert.componentOnReady();
        const alerta = await alert.create({
            header: 'Invalido',
            message: 'Despesa Invalida',
            buttons: ['OK']
        });
        return await alerta.present();
    }

    const limpar = () => {
        name.value = '';
        orcamento.value = '';
    }

    novo.addEventListener('click', function () {
        const validateName = name.value;
        const validateOrcamento = orcamento.value

        if (
            validateName.trim() <= 0 ||
            validateOrcamento <= 0 ||
            validateOrcamento.trim() <= 0
        ) {
            alerta();
            return;
        }

        const newItem = doc.createElement('ion-item');
        newItem.textContent = `${validateName} :$ ${validateOrcamento}`

        list.appendChild(newItem);

        soma += +validateOrcamento;

        total.textContent = `Total: $${soma}`;

        limpar()

    }, false);

    clear.addEventListener('click', limpar, false)



})(document, window)