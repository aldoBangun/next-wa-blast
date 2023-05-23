import DrawerContent from './DrawerContent'
import DrawerSide from './DrawerSide'
import DrawerMenu from './DrawerMenu'
import DrawerMenuItem from './DrawerMenuItem'

export default function Drawer({ side, content }){
    return <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {content}
      {side}
    </div>
}

Drawer.Side = DrawerSide
Drawer.Content = DrawerContent
Drawer.Menu = DrawerMenu
Drawer.MenuItem = DrawerMenuItem