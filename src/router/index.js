import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import homeRoutes from "@/router/routes/homeRoutes.js";

const routes  = [
  ...homeRoutes
]

// iOS PWA환경 에서
// createWebHistory를 사용하면 링크 이동을 하면 상태바가 표시되므로,
// createWebHashHistory 을 사용.
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: [
    ...routes
  ]
})

router.beforeEach((to, from, next) => {
  // Nullish coalescing operator(Null 병합 연산자 (??))
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
  document.title = to.meta.title ?? 'Vite + Vue';
  next();
});

export default router