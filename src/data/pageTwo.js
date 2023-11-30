import { pipeline, deploy, tools, scale } from "../assets";

export const pageTwo = [
  {
    title: "Configurable Build And Deploy Pipelines",
    description:
      "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
    img: pipeline,
  },

  {
    title: "Push To Deploy",
    description:
      "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
    img: deploy,
  },

  {
    title: "Multiple Runtimes",
    description:
      "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
    img: tools,
  },

  {
    title: "Scale Infinitely",
    description:
      "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime",
    img: scale,
  },
];
