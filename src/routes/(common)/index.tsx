import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeadInfo } from "~/components/header/HeadingInfo";
import { PlayList } from "~/components/playList/play-list";
// import { HeadInfo } from "~/components/head-info/head-info";

export default component$(() => {


  return (
    <div>
      <HeadInfo title="Keep creating, keep inspiring 👌" />
      <PlayList />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
