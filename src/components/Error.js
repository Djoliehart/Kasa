import BlockCenter from "./BlockCenter"

function Error() {
    return (
        <main class="main container">
            <BlockCenter
                title="404"
                description="Oups! La page que vous demandez n'existe pas."
                link="/"
                anchor="Retourner sur la page d’accueil"
            />
        </main>
    )
}
 
export default Error
