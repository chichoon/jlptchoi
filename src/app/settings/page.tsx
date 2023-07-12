import {
  NavBar,
  NavBarButton,
  NavBarSpacer,
  PageWrapper,
  SettingsSection,
} from "@/components";

export default function Settings() {
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
