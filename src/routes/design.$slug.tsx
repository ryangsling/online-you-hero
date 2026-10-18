import { createFileRoute } from "@tanstack/react-router";
import DesignProjectDetailPage from "@/components/design/DesignProjectDetailPage";
import { getDesignProject } from "@/data/designProjects";

export const Route = createFileRoute("/design/$slug")({
  head: ({ params }) => {
    const project = getDesignProject(params.slug);
    const title = project
      ? `${project.title} — Design Project`
      : "Design Project Not Found — Ahmed Alif";
    const description = project
      ? project.summary
      : "Requested design project could not be found.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/design/${params.slug}` }],
    };
  },
  component: DesignProjectRoute,
});

function DesignProjectRoute() {
  const { slug } = Route.useParams();
  return <DesignProjectDetailPage slug={slug} />;
}
