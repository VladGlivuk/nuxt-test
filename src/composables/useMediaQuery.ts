import { ref, onMounted, onUnmounted } from "vue";

export const useMediaQuery = (query: string) => {
  const matches = ref(false);

  if (typeof window !== "undefined") {
    const mediaQuery = window.matchMedia(query);

    matches.value = mediaQuery.matches;

    const handleChange = (event: MediaQueryListEvent) => {
      matches.value = event.matches;
    };

    onMounted(() => {
      mediaQuery.addEventListener("change", handleChange);
    });

    onUnmounted(() => {
      mediaQuery.removeEventListener("change", handleChange);
    });

    return matches;
  }

  return true;
};
