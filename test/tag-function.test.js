function tagFunction(array, ...args) {
    console.log(array)
    console.log(args)
}

test('Tag Function', () => {
    const firstName = 'Thomas'
    const lastName = 'Thomas'

    tagFunction`Hello ${firstName} ${lastName}`
})

test('Tag Function Sql', () => {
    const name = 'Thomas Alberto'
    const age = 19

    tagFunction`SELECT *
                FROM users
                WHERE name = ${name}
                  AND age = ${age}`
})