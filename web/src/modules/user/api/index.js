import { gql } from '@apollo/client';

export const GET_DRINQUE = gql`
    query getDrinque($drinque_id: Int!) {
        drinque(id: $drinque_id) {
            id
            nome
        }
    }
`;

export const GET_DRINQUES_LIST = gql`
    query getDrinquesList {
        drinques {
            id
            nome
            categorias {
                nome
            }
            ingredientes {
                ordem
                quantidade
                medida
                tipoIngrediente {
                    nome
                }
            }
            decoracao
            calorias
            preparo {
                ordem
                metodo
            }
            sobre
        }
    }
`;
