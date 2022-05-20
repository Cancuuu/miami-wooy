import React, { useEffect, useState } from "react";
import {
  Button,
  LanguagePickerDropdown,
  PageHeaderContainer,
  SettingsContainer,
  TestnetSettingsItem,
  // ThemeSettingsItem,
  Account,
  NetworkSelector,
  SettingsItem,
  CheckboxInputGroup,
  NavPoolBalance,
  ThemeSettingsItem,
} from "@wooy/react-components";
import Link from "next/link";

// rainbow kit

// import { ConnectButton } from '@rainbow-me/rainbowkit'

export const PageHeader = (props) => (
  <PageHeaderContainer Link={Link} as="/" href="/">
    <UsersAccount />
    <Settings />
  </PageHeaderContainer>
);

const Settings = (props) => {
  const { t } = useTranslation();

  return (
    <SettingsContainer t={t} className="ml-1 my-auto">
      <LanguagePicker t={t} />
      {/* <ThemeSettingsItem t={t} /> */}
      <ManagePoolsSettingsItem t={t} />
      <TestnetSettingsItem t={t} />
    </SettingsContainer>
  );
};

const LanguagePicker = () => {
  const { i18n: i18next, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18next.language);

  return (
    <SettingsItem label={t("language")}>
      <LanguagePickerDropdown
        currentLang={currentLang}
        changeLang={(newLang) => {
          setCurrentLang(newLang);
          i18next.changeLanguage(newLang);
        }}
      />
    </SettingsItem>
  );
};

const ManagePoolsSettingsItem = () => {
  const { t } = useTranslation();

  const [showManageLinks, setShowManageLinks] = useState(false);
  useEffect(() => {
    const cookieShowAward = Cookies.get(SHOW_MANAGE_LINKS);
    setShowManageLinks(cookieShowAward);
  }, []);

  const handleShowManageLinksClick = (e) => {
    e.preventDefault();

    if (showManageLinks) {
      Cookies.remove(SHOW_MANAGE_LINKS, COOKIE_OPTIONS);
    } else {
      Cookies.set(SHOW_MANAGE_LINKS, 1, COOKIE_OPTIONS);
    }

    setShowManageLinks(!showManageLinks);
  };

  return (
    <SettingsItem label={t("manage")} tip={t("showPoolManagementDescription")}>
      <CheckboxInputGroup
        large
        id="settings-show-award"
        name="settings-show-award"
        label={t("showPoolManagementPages")}
        checked={showManageLinks}
        handleClick={handleShowManageLinksClick}
      />
    </SettingsItem>
  );
};

const UsersAccount = () => {
  const {
    isWalletConnected,
    provider,
    connectWallet,
    disconnectWallet,
    walletName,
    isOnboardReady,
    address: usersAddress,
    network: chainId,
    wallet,
  } = useOnboard();
  const supportedNetworks = useEnvChainIds();
  const { t } = useTranslation();

  if (isOnboardReady) return null;

  if (!isWalletConnected) {
    return (
      <Button
        padding="px-4 sm:px-6 py-1"
        onClick={() => connectWallet()}
        textSize="xxxs"
        className="mx-1 my-auto bg-card"
      >
        {t("connectWallet")}
      </Button>
    );
  }

  return (
    <>
      <NetworkSelector
        t={t}
        wallet={wallet}
        chainId={chainId}
        isWalletConnected={isWalletConnected}
        supportedNetworks={supportedNetworks}
        className="mx-1 my-auto"
      />
      <NavPoolBalance usersAddress={usersAddress} className="mx-1 my-auto" />
      <Account
        t={t}
        className="mx-1 my-auto"
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        isWalletConnected={isWalletConnected}
        provider={provider}
        chainId={chainId}
        usersAddress={usersAddress}
        walletName={walletName}
      />
    </>
  );
};
