const { SchemaDirectiveVisitor } = require('graphql-tools')
const { defaultFielResolver } = require ('graphql')

class AuthDirective extends SchemaDirectiveVisitor { // nombre de la clase + esquema
    visitArgumentDefinition(field){
        const { resolved = defaultFielResolver} = field; // field es una promesa
        field.resolved = async function(...args) {
            const [ , , context] =args;
            if(context.user){   // trae el contexto del user
                 return await resolved.apply(this, args);
               
            }else{
                throw new Error ('Necesitas estar logueado')
            }

        }
    }

}

module.exports = { AuthDirective }