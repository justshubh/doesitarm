import dotenv from 'dotenv'

dotenv.config()



export const publicRuntimeConfig = {
    allUpdateSubscribe: process.env.ALL_UPDATE_SUBSCRIBE,
    testResultStore: process.env.TEST_RESULT_STORE,
    siteUrl: process.env.URL
}

export function makeViteDefinitions () {
    const definitions = {}

    for ( const key in publicRuntimeConfig ) {
        definitions[`this.$config.${key}`] = JSON.stringify( publicRuntimeConfig[key] )
        definitions[`global.$config.${key}`] = JSON.stringify( publicRuntimeConfig[key] )
    }

    return definitions
}
