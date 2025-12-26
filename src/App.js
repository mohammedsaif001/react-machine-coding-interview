import ClassBasedComp from "./1_class_based_comp/class-based-comp";
import LifeCycleClassComp from "./1_class_based_comp/life-cycle-class-comp.jsx";
import UseEffectPolyfillComponent from "./2_use_effect_polyfill/use-effect-polyfill.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <ClassBasedComp /> */}
      {/* <LifeCycleClassComp/> */}
      <UseEffectPolyfillComponent />
    </div>
  );
}
