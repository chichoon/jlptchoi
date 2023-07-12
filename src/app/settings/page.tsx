import {
  NavBar,
  NavBarButton,
  NavBarSpacer,
  PageWrapper,
  SettingsSection,
} from "@/components";
import { useWordsDB } from "@/hooks";

export default function Settings() {
  const { removeDB } = useWordsDB();
  function handleReset() {
    removeDB();
  }
  return (
    <>
      <NavBar>
        <NavBarButton href="/">
          <span>홈</span>
        </NavBarButton>
        <NavBarSpacer />
        <NavBarSpacer />
      </NavBar>
      <PageWrapper>
        <SettingsSection />
      </PageWrapper>
    </>
  );
}
