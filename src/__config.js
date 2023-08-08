const CONFIGS = {
    valores: {
        pacotes:{
            recruta: { // Pacote Recruta
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

        descontos:{
            desconto: false, // true ou false (Por padrão, o valor de desconto está R$25,00 o Pacote Recruta, e R$55,00 o Pacote At)
            
            pacotes: {
                recruta: { // Pacote Recruta
                    valor: 25, // Valor do desconto do Pacote Recruta
                    valorRecarga: 20, // Valor da recarga do Pacote Recruta
                },

                atirador: { // Pacote Atirador
                    valor: 55, // Valor do desconto do Pacote Atirador
                    valorRecarga: 15, // Valor da recarga do Pacote Atirador
                },
            },
        },
    },
};

export default CONFIGS;