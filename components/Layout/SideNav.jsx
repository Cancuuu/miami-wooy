import React from "react";
import {
  SideNavContainer,
  SideNavLink,
  SideAccountIcon,
  SidePoolsIcon,
  SocialLinks,
  SidePodsIcon,
} from "@wooy/react-components";

import Link from "next/link";
import { useRouter } from "next/router";

export const SideNav = (props) => {
  const router = useRouter();
  const { pathname } = router;
  const isPoolView = !["/account"].includes(pathname);

  return (
    <div className="flex flex-col justify-between h-full">
      <SideNavContainer className="top-side-nav">
        <SideNavLink
          href="/"
          as="/"
          label={"Pools"}
          Link={Link}
          useRouter={useRouter}
          isCurrentPage={isPoolView}
        >
          <SidePoolsIcon />
        </SideNavLink>
        <SideNavLink
          href="/pods"
          as="/pods"
          label={"POD`S"}
          Link={Link}
          useRouter={useRouter}
          match="/pods"
        >
          <SidePodsIcon />
        </SideNavLink>
        <SideNavLink
          href="/account"
          as="/account"
          label={"account"}
          Link={Link}
          useRouter={useRouter}
          match="/account"
        >
          <SideAccountIcon />
        </SideNavLink>
      </SideNavContainer>

      <SideNavContainer className="mb-4">
        <SocialLinks />
      </SideNavContainer>
    </div>
  );
};
