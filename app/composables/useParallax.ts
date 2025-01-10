export function useParallax(maxOffset: number = 30) {
  const x = ref(0);
  const y = ref(0);

  function updateMousePosition(event: MouseEvent) {
    x.value = event.clientX;
    y.value = event.clientY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", updateMousePosition);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", updateMousePosition);
  });

  const parallaxStyles = computed(() => {
    const offsetX = (x.value / window.innerWidth - 0.5) * maxOffset;
    const offsetY = (y.value / window.innerHeight - 0.5) * maxOffset;
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`,
    };
  });

  return {
    parallaxStyles,
  };
}
