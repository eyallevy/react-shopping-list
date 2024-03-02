import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return <>
        <MainNavigation />
        <main>
            <h1>An error eccurred!</h1>
            <p>Cound not find this page!</p>
        </main>
    </>
};

export default ErrorPage;