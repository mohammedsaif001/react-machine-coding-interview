import UseFetchComponent from "./10_use_fetch/use-fetch-comp.jsx";
import UseIntersectionObserverComponent from "./11_use_intersection_observer/use-inersection-observer.jsx";
import ProgressBarView from "./12_progress_bar/progress-bar-view.jsx";
import PaginationBackendView from "./13_pagination/pagination-backend-view.jsx";
import PaginationView from "./13_pagination/pagination-view.jsx";
import InfiniteScrollView from "./14_infinite_scroll/infinite-scroll-view.jsx";
import ClassBasedComp from "./01_class_based_comp/class-based-comp";
import LifeCycleClassComp from "./01_class_based_comp/life-cycle-class-comp.jsx";
import UseEffectPolyfillComponent from "./02_use_effect_polyfill/use-effect-polyfill.jsx";
import LightDarkMode from "./03_context_light_dark_mode/light-dark-mode.js";
import UseReducerComponent from "./04_use_reducer/use-reducer-comp.jsx";
import UseMemoCallbackComp from "./05_use_memo_callback/use-memo-callback-comp.jsx";
import UseImperativeHandleComponent from "./06_use_imperative_handle/use-imperative-handle-comp.jsx";
import UseWindowSize from "./07_use_window/use-window-size.jsx";
import UseDebounceHook from "./08_use_debounce/use-debounce-comp.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <ClassBasedComp /> */}
      {/* <LifeCycleClassComp/> */}
      {/* <UseEffectPolyfillComponent /> */}
      {/* <LightDarkMode /> */}
      {/* <UseReducerComponent /> */}
      {/* <UseMemoCallbackComp /> */}
      {/* <UseImperativeHandleComponent /> */}
      {/* <UseWindowSize /> */}
      {/* <UseDebounceHook /> */}
      {/* <UseFetchComponent /> */}
      {/* <UseIntersectionObserverComponent /> */}
      {/* <ProgressBarView /> */}
      {/* <PaginationView /> */}
      {/* <PaginationBackendView /> */}
      <InfiniteScrollView />
    </div>
  );
}
