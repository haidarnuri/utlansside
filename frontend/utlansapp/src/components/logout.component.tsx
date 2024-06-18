const LogoutComponent = () => {


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    }

    return(
        <>
        <form onSubmit={handleSubmit}></form>
        <button type="submit">Log out</button>         
        </>
    )
}

export default LogoutComponent;