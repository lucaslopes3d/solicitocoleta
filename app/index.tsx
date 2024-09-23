import * as S from "./styles";
import { FormComponent } from "../components/FormComponent/formComponent";
import { LogoComponent } from "@/components/LogoComponet/LogoComponent";

export default function Index() {
  return (
    <S.Visualization>
      <LogoComponent />
      <FormComponent />
    </S.Visualization>
  );
}
