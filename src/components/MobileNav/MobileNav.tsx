import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-sky-900"/>
        </SheetTrigger>

        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>Predict Beta</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex">
                <Button className="flex-1 font-semibold bg-sky-900">Create Account</Button>
                <Button className="flex-1 font-semibold bg-sky-900">Log in</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav