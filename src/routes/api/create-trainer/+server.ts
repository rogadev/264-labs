/** @type {import('./$types').RequestHandler} */
export async function GET() {

    const response = await fetch('/api/create-three')
    const { pokemon } = await response.json()

    // create 1 trainer
    const trainer: Trainer = {
        name: 'Kyle',
        pokemon: [...pokemon]
    }

    return new Response({ trainer })
}