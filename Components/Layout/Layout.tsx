import Header from "../Header/Header"


type Children = {
    children: any
}

export default function Layout({ children }: Children) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}