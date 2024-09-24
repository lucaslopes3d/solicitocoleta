import * as S from "./styles";
import { FormComponent } from "../screens";
import { LogoComponent } from "@/components/logoComponet";

export default function Index() {
  return (
    <S.Visualization>
      <LogoComponent />
      <FormComponent />
    </S.Visualization>
  );
}
