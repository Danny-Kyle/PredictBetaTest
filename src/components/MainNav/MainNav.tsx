import { Button } from "@/components/ui/button"

interface MainNavProps {
  title: string
}

const MainNav = ({title}: MainNavProps) => {
  return (
    <Button variant="ghost" className="font-bold hover:text-sky-900 hover:bg-white">
      {title}
    </Button>
  )
}

export default MainNav