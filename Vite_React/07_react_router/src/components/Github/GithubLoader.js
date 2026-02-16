export default async function gitgubInfoLoader(){
    const response = await fetch('https://api.github.com/users/prateek-gith')
    return response.json()
}