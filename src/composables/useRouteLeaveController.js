import { onBeforeRouteLeave } from 'vue-router'

const _removeQueryString = (url) => {
  const queryIndex = url.indexOf('?')
  return queryIndex !== -1 ? url.slice(0, queryIndex) : url
}

// `state`속성은 Vue-router 4.X 만 가능
// 사이트 마다 `window.history.state` 다르다.
// https://developer.mozilla.org/ko/docs/Web/API/History/state
// 현 history에 위치한 값입니다. 이 값은 pushState() 또는 replaceState()을 사용할때까지 null 값을 가집니다.
const _isHistoryBack = (to) => {
  return to.path === _removeQueryString(history.state.current)
}

/**
 * 안드로이드의 뒤로가기 버튼도 제어할 수 있도록 onBeforeRouteLeave를 사용한다.
 *
 * @param backFunction 뒤로가기로 화면이동할 때, 추가 기능 Function
 * @param goFunction Push, Replace로 화면이동할 때, 추가 기능 Function
 */
export function useRouteLeaveController(backFunction, goFunction) {
  onBeforeRouteLeave((to, from, next) => {
    if (_isHistoryBack(to)) {
      // 뒤로가기(history.back)로 이동할 때
      if (backFunction) {
        backFunction(to, from, next)
      } else {
        next()
      }
    } else {
      // 다음으로 화면 이동할 때
      if (goFunction) {
        goFunction(to, from, next)
      } else {
        next()
      }
    }
  })
}
