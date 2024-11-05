const HelloWorld = () => import('@/components/HelloWorld.vue')
const Home = () => import('@/pages/Home.vue')
const FullLayer = () => import('@/pages/FullLayer.vue')
const BottomSheet = () => import('@/pages/BottomSheet.vue')
const Keypad = () => import('@/pages/Keypad.vue')
const A =() => import('@/pages/A.vue')
const B =() => import('@/pages/B.vue')
const C =() => import('@/pages/C.vue')



export default [
  {
    path: '/hello-world',
    name: 'helloWorld',
    component: HelloWorld,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'full-layer',
        name: 'home.FullLayer',
        components: {
          fullLayer: FullLayer,
        },
      },
      {
        path: 'bottom-sheet',
        name: 'home.BottomSheet',
        components:{
          bottomSheet: BottomSheet,
        }
      },
      {
        path: 'keypad',
        name: 'home.Keypad',
        components:{
          fullLayer: Keypad,
        }
      }
    ],
  },
  {
    path: '/full-layer',
    name: 'fullLayer',
    component: FullLayer,
  },
  {
    path: '/fade-full-layer',
    name: 'fadeFullLayer',
    components: {
      fade: FullLayer,
    },
  },
  {
    path: '/bottom-sheet',
    name: 'bottomSheet',
    component: BottomSheet,
  },
  {
    path: '/a',
    name: 'a',
    component: A,
    meta: { title: 'A' },
  },
  {
    path: '/b',
    name: 'b',
    component: B,
    meta: { title: 'B' },
  },
  {
    path: '/c',
    name: 'c',
    component: C,
    meta: { title: 'C' },
  }
]