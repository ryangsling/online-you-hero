import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import DesignPage from "@/components/design/DesignPage";

const title = "Design Projects — Ahmed Alif";
const description =
  "Selected visual work by Md. Ahmed Alif — identity systems, campaigns, and product surfaces.";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://online-you-hero.lovable.app/design" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/design" }],
  }),
  component: DesignRouteComponent,
});

function DesignRouteComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return normalized === "/design" ? <DesignPage /> : <Outlet />;
}
