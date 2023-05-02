import Menu from "../Menu/Menu";

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <>
    <div className="container">
      <div className="app">
        <Menu />
        <div className="app-content">
          {children}
        </div>
      </div>
    </div>
  </>
}