import ClassBasedComp from "./1_class_based_comp/class-based-comp";
import LifeCycleClassComp from "./1_class_based_comp/life-cycle-class-comp.jsx";
import UseEffectPolyfillComponent from "./2_use_effect_polyfill/use-effect-polyfill.jsx";
import LightDarkMode from "./3_context_light_dark_mode/light-dark-mode.js";
import UseReducerComponent from "./4_use_reducer/use-reducer-comp.jsx";
import UseMemoCallbackComp from "./5_use_memo_callback/use-memo-callback-comp.jsx";
import UseImperativeHandleComponent from "./6_use_imperative_handle/use-imperative-handle-comp.jsx";
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
      <UseImperativeHandleComponent />
    </div>
  );
}
