import { component$ } from "@builder.io/qwik";
import Logo from "../Logo";
import ItemNavbar from "./ItemNavbar";

const listItem = [
  {
    text: 'Music',
    url: '/music'
  },
  {
    text: 'Songs Effect',
    url: '/songs'
  },
  {
    text: 'Trending',
    url: '/trending'
  }
]

const listItemV2 = [
  {
    text: 'My favorites',
    url: '/favorites'
  },
  {
    text: 'My playlist',
    url: '/playlist'
  },
  {
    text: 'Download history',
    url: '/download'
  }
]

export default component$(()=>{
  return (
    <nav class='
      hidden
      sm:flex
    bg-slate-700
      h-[100vh]
      w-[230px]
      flex-col
      items-center
      justify-start
    '>
      <Logo />
      {
        listItem.map(item=><ItemNavbar key={item.text} text={item.text} url={item.url} />)
      }
      <hr />
      {
        listItemV2.map(item => <ItemNavbar key={item.text} text={item.text} url={item.url} />)
      }
    </nav>
  )
})