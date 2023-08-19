const CONFIGS = {

    gerais:{
        nome: 'Guns Airsoft Arena', // Nome do site
        nomeCurto: 'Guns Airsoft', // Nome curto do site
        cnpj: '44.433.534/0001-87', // CNPJ da empresa
        telefone: '554797519814', // Telefone da empresa
        email: 'gunsairsoftarena@gmail.com', // Email da empresa
        endereco: 'Rua Boehmerwald, 170 - Boehmerwald, Joinville - SC, 89219-731', // Endereço da empresa
        redesSociais:{ // Redes sociais da empresa
            facebook: 'https://www.facebook.com/gunsairsoftarena/', // Facebook da empresa
            instagram: 'https://www.instagram.com/gunsairsoftarena/', // Instagram da empresa
        },
    },

    paginas:{
        manutencao:{
            get: true, // true ou false (Se a página de manutenção está ativa ou não)
        }
    },

    contato:{ // Informações de contato
        list:[ // Lista de horários
            {day: '・segunda-feira', open: '07:00', close: '22:00', number: 1,
                type: '', // Se no dia não abrir, coloque 'fechado' no type
            },

            {day: '・terça-feira', open: '07:00', close: '22:00', number: 2,
                type: '', // Se no dia não abrir, coloque 'fechado' no type
            },

            {day: '・quarta-feira', open: '07:00', close: '22:00', number: 3,
                type: '', // Se no dia não abrir, coloque 'fechado' no type
            },

            {day: '・quinta-feira', open: '07:00', close: '22:00', number: 4,
                type: '', // Se no dia não abrir, coloque 'fechado' no type
            },

            {day: '・sexta-feira', open: '07:00', close: '22:00',number: 5,
                type: '', // Se no dia não abrir, coloque 'fechado' no type
            },

            {day: '・sábado', open: '07:00', close: '22:00', number: 6,
                type: '', // Se no dia não abrir, coloque 'fechado' no type
            },

            {day: '・domingo', open: '07:00', close: '22:00', number: 0,
                type: '', // Se no dia não abrir, coloque 'fechado' no type
            },
        ],
    },

    valores:{ // Valores de cada pacote
        pacotes:{ // Pacotes
            recruta:{ // Pacote Recruta
                valor: 30, // Valor do Pacote Recruta
                bbsBase: 100, // Quantidade de BBS base do Pacote Recruta
                valorRecarga: 20, // Valor da recarga do Pacote Recruta
            },

            atirador: { // Pacote Atirador
                valor: 60, // Valor do Pacote Atirador
                bbsBase: 300, // Quantidade de BBS base do Pacote At
                valorRecarga: 15, // Valor da recarga do Pacote At
            },
        },

        descontos:{ // Descontos
            desconto: false, // true ou false (Por padrão, o valor de desconto está R$25,00 o Pacote Recruta, e R$55,00 o Pacote At)
            
            pacotes:{ // Pacotes
                recruta:{ // Pacote Recruta
                    valor: 25, // Valor do desconto do Pacote Recruta
                    valorRecarga: 20, // Valor da recarga do Pacote Recruta
                },

                atirador:{ // Pacote Atirador
                    valor: 55, // Valor do desconto do Pacote Atirador
                    valorRecarga: 15, // Valor da recarga do Pacote Atirador
                },
            },
        },
    },
};

const LIST_HOURS = (CONFIGS.contato.list);

export { CONFIGS, LIST_HOURS };